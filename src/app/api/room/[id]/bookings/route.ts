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
			return new NextResponse(
				'You must be signed in to fetch bookings.',
				{
					status: 401,
				}
			);
		}

		const bookings = await db.booking.findMany({
			where: {
				roomId: params.id,
			},
		});

		return NextResponse.json(bookings, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(error, { status: 500 });
	}
};
