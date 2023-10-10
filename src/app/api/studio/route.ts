import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { newStudio } from '@/lib/validators/studio';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

export const GET = async (req: NextRequest, res: NextResponse) => {
	try {
		const session = await getAuthSession();
		if (!session?.user) {
			return new NextResponse('You must be signed in to fetch Studios.', {
				status: 401,
			});
		}

		const studios = await db.studio.findMany({
			where: {
				OR: [
					{
						creatorId: session?.user.id,
					},
					{
						members: {
							some: {
								id: session?.user.id,
							},
						},
					},
				],
			},
		});

		return NextResponse.json(studios, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(error, { status: 500 });
	}
};

export const POST = async (req: NextRequest, res: NextResponse) => {
	try {
		const body = newStudio.parse(await req.json());

		const session = await getAuthSession();
		if (!session?.user) {
			return new NextResponse(
				'You must be signed in to create a Studio.',
				{ status: 401 }
			);
		}

		const existingStudio = await db.studio.findUnique({
			where: {
				name: body.name,
			},
		});
		if (existingStudio) {
			return new NextResponse('Studio of this name already exists.', {
				status: 409,
			});
		}

		const createdStudio = await db.studio.create({
			data: {
				name: body.name,
				description: body.description,
				creatorId: session.user.id,
				members: {
					connect: {
						id: session.user.id,
					},
				},
				scheduleProperties: {
					create: {
						dayStart: new Date(0, 0, 0, 6),
						dayEnd: new Date(0, 0, 0, 22),
					},
				},
			},
		});
		return NextResponse.json(createdStudio, { status: 201 });
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
