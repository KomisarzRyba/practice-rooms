import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, res: NextResponse) => {
	try {
		const session = await getAuthSession();
		if (!session?.user) {
			return new NextResponse('You must be signed in to fetch users.', {
				status: 401,
			});
		}

		const members = await db.user.findMany();
		if (!members || members.length === 0) {
			return new NextResponse('Not found', { status: 404 });
		}
		return NextResponse.json(members, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(error, { status: 500 });
	}
};
