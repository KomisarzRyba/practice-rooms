import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { notFound } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';
import { SchedulePropertiesUpdateArgsSchema } from '../../../../../../prisma/generated/zod';
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
				'You must be signed in to fetch schedule properties.',
				{
					status: 401,
				}
			);
		}

		const props = await db.scheduleProperties.findUnique({
			where: {
				studioId: params.id,
			},
		});
		if (!props) {
			return notFound();
		}

		return NextResponse.json(props, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(error, { status: 500 });
	}
};

export const PUT = async (req: NextRequest, { params }: RouteProps) => {
	try {
		const session = await getAuthSession();
		if (!session?.user) {
			return new NextResponse(
				'You must be signed in to edit schedule properties.',
				{
					status: 401,
				}
			);
		}

		const input = SchedulePropertiesUpdateArgsSchema.parse(
			await req.json()
		);

		const props = await db.scheduleProperties.update(input);

		return NextResponse.json(props, { status: 200 });
	} catch (error) {
		console.log(error);
		if (error instanceof ZodError) {
			return new NextResponse('Invalid request payload.', {
				status: 400,
			});
		}
		return NextResponse.json(error, { status: 500 });
	}
};
