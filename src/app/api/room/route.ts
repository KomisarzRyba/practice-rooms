import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { newRoom } from '@/lib/validators/room';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

export const POST = async (req: NextRequest, res: NextResponse) => {
	try {
		const body = newRoom.parse(await req.json());

		const session = await getAuthSession();
		if (!session?.user) {
			return new NextResponse('You must be signed in to create a Room.', {
				status: 401,
			});
		}

		const createdRoom = await db.room.create({
			data: {
				name: body.name,
				studioId: body.studioId,
			},
		});
		return NextResponse.json(createdRoom, { status: 201 });
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
