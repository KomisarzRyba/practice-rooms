import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { newStudio } from '@/lib/validators/studio';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { StudioUpdateArgsSchema } from '../../../../prisma/generated/zod';

export const GET = async (req: NextRequest, res: NextResponse) => {
	try {
		const session = await getAuthSession();
		if (!session?.user) {
			return new NextResponse('You must be signed in to Studios.', {
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
							every: {
								id: session?.user.id,
							},
						},
					},
				],
			},
		});
		if (!studios || studios.length === 0) {
			return new NextResponse('Not found', { status: 404 });
		}
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
			},
		});
		return new NextResponse(createdStudio.id, { status: 201 });
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
