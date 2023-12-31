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
			return new NextResponse('You must be signed in to fetch users.', {
				status: 401,
			});
		}

		const invitedUsers = await db.studio.findUnique({
			where: {
				id: params.id,
			},
			select: {
				invitedUserEmails: true,
			},
		});

		if (!invitedUsers) {
			return new NextResponse('Not found', { status: 404 });
		}
		return NextResponse.json(invitedUsers.invitedUserEmails, {
			status: 200,
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json(error, { status: 500 });
	}
};
