import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { StudioUpdateArgsSchema } from '../../../../../prisma/generated/zod';
import { ZodError } from 'zod';

type RouteProps = {
	params: {
		id: string;
	};
};

export const GET = async (req: NextRequest, { params }: RouteProps) => {
	try {
		const session = await getAuthSession();
		if (!session?.user) {
			return new NextResponse(
				'You must be signed in to fetch a Studio.',
				{ status: 401 }
			);
		}

		const studio = await db.studio.findUnique({
			where: {
				id: params.id,
			},
		});
		if (!studio) {
			return new NextResponse('Not found', { status: 404 });
		}
		return NextResponse.json(studio, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(error, { status: 500 });
	}
};

export const PATCH = async (req: NextRequest, { params }: RouteProps) => {
	try {
		const input = StudioUpdateArgsSchema.parse(await req.json());

		const session = await getAuthSession();
		if (!session?.user) {
			return new NextResponse('You must be signed in to edit a Studio.', {
				status: 401,
			});
		}

		const existingStudio = await db.studio.findUnique({
			where: { id: params.id },
			select: { creatorId: true },
		});
		if (existingStudio?.creatorId !== session.user.id) {
			return new NextResponse(
				'You are not authorized to edit a Studio.',
				{ status: 401 }
			);
		}

		const updatedStudio = await db.studio.update(input);

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
