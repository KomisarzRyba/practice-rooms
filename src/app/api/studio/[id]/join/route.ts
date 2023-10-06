import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

type RouteProps = {
	params: {
		id: string;
	};
};

export const POST = async (req: NextRequest, { params }: RouteProps) => {
	try {
		const session = await getAuthSession();
		if (!session?.user) {
			return new NextResponse('You must be signed in to join a Studio.', {
				status: 401,
			});
		}

		const studio = await db.studio.findUnique({
			where: { id: params.id },
			select: { invitedUserEmails: true },
		});
		if (!studio) {
			return new NextResponse('Not found', { status: 404 });
		}
		if (
			!studio.invitedUserEmails.find(
				(email) => email === session.user.email
			)
		) {
			return new NextResponse('You are not invited to this Studio.', {
				status: 401,
			});
		}

		const updatedStudio = await db.studio.update({
			where: { id: params.id },
			data: {
				members: {
					connect: {
						id: session.user.id,
					},
				},
				invitedUserEmails: {
					set: studio.invitedUserEmails.filter(
						(email) => email !== session.user.email
					),
				},
			},
		});

		return NextResponse.json(updatedStudio, { status: 201 });
	} catch (error) {
		console.log(error);
		if (error instanceof ZodError) {
			return new NextResponse('Invalid request payload.', {
				status: 400,
			});
		}
		return new NextResponse('Internal server error', { status: 500 });
	}
};

export const PATCH = async (req: NextRequest, { params }: RouteProps) => {
	try {
		const session = await getAuthSession();
		if (!session?.user) {
			return new NextResponse(
				'You must be signed in to remove a user from the Studio.',
				{
					status: 401,
				}
			);
		}

		const removedUserId = await req.text();
		const removedUser = await db.user.findUnique({
			where: {
				id: removedUserId,
			},
		});

		const studio = await db.studio.findUnique({
			where: { id: params.id },
			select: {
				name: true,
				members: true,
				creatorId: true,
				invitedUserEmails: true,
			},
		});
		if (!studio) {
			return new NextResponse('Not found', { status: 404 });
		}
		if (!studio.members.find((member) => member.id === session.user.id)) {
			return new NextResponse('User is not a member of the Studio', {
				status: 401,
			});
		}
		if (
			session.user.id !== studio.creatorId &&
			session.user.id !== removedUserId
		) {
			return new NextResponse('Unauthorized', { status: 401 });
		}

		await db.studio.update({
			where: { id: params.id },
			data: {
				members: {
					disconnect: {
						id: removedUserId,
					},
				},
			},
		});
		const response = { ...removedUser, studioName: studio.name };

		return NextResponse.json(response, {
			status: 200,
		});
	} catch (error) {
		console.log(error);
		if (error instanceof ZodError) {
			return new NextResponse('Invalid request payload.', {
				status: 400,
			});
		}
		return new NextResponse('Internal server error', { status: 500 });
	}
};
