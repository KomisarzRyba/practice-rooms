import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

type RouteProps = {
	params: {
		id: string;
	};
};

export const GET = async (req: NextRequest, { params }: RouteProps) => {
	try {
		const session = await getAuthSession();
		if (!session?.user) {
			return new NextResponse('You must be signed in to fetch rooms.', {
				status: 401,
			});
		}

		const room = await db.room.findUnique({
			where: {
				id: params.id,
			},
		});

		return NextResponse.json(room, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(error, { status: 500 });
	}
};

export const DELETE = async (req: NextRequest, { params }: RouteProps) => {
	try {
		const session = await getAuthSession();
		if (!session?.user) {
			return new NextResponse('You must be signed in to delete rooms.', {
				status: 401,
			});
		}

		const room = await db.room.delete({
			where: {
				id: params.id,
			},
		});

		return NextResponse.json(room, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(error, { status: 500 });
	}
};
