import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError, string } from 'zod';

type RouteProps = {
	params: {
		id: string;
	};
};

export const GET = async (req: NextRequest, { params }: RouteProps) => {
	try {
		const session = await getAuthSession();
		if (!session?.user) {
			return new NextResponse('You must be signed in to fetch users.', {
				status: 401,
			});
		}

		const membersWithCreatorId = await db.studio.findUnique({
			where: {
				id: params.id,
			},
			select: {
				members: true,
				creator: true,
			},
		});

		if (!membersWithCreatorId) {
			return new NextResponse('Not found', { status: 404 });
		}
		return NextResponse.json(membersWithCreatorId, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(error, { status: 500 });
	}
};

export const POST = async (req: NextRequest, { params }: RouteProps) => {
	try {
		const session = await getAuthSession();
		const studio = await db.studio.findUnique({
			where: {
				id: params.id,
			},
			select: {
				creatorId: true,
				members: true,
				invitedUserEmails: true,
			},
		});
		if (!studio) {
			return new NextResponse('Not found', { status: 404 });
		}
		if (session?.user.id !== studio?.creatorId) {
			return new NextResponse(
				'You must be signed in as the Studio Creator to add new Members.',
				{ status: 401 }
			);
		}

		const newMemberEmail = string().parse(await req.text());
		const existingMember = await db.user.findUnique({
			where: {
				email: newMemberEmail,
			},
		});
		if (
			studio.members.find((member) => member.id === existingMember?.id) ||
			studio.invitedUserEmails.find((email) => email === newMemberEmail)
		) {
			return new NextResponse(
				'This user is already a Member of this Studio.',
				{ status: 400 }
			);
		}
		if (existingMember) {
			await db.studio.update({
				where: {
					id: params.id,
				},
				data: {
					members: {
						connect: {
							id: existingMember.id,
						},
					},
				},
			});
			return new NextResponse(existingMember.name, { status: 201 });
		} else {
			await db.studio.update({
				where: {
					id: params.id,
				},
				data: {
					invitedUserEmails: {
						push: newMemberEmail,
					},
				},
			});
			return new NextResponse(newMemberEmail, { status: 201 });
		}
	} catch (error) {
		console.log(error);
		if (error instanceof ZodError) {
			return NextResponse.json(error, { status: 400 });
		}
		return NextResponse.json(error, { status: 500 });
	}
};
