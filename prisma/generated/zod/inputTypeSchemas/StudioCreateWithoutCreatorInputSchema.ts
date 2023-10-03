import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedManyWithoutStudiosJoinedInputSchema } from './UserCreateNestedManyWithoutStudiosJoinedInputSchema';
import { RoomCreateNestedManyWithoutStudioInputSchema } from './RoomCreateNestedManyWithoutStudioInputSchema';

export const StudioCreateWithoutCreatorInputSchema: z.ZodType<Prisma.StudioCreateWithoutCreatorInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  members: z.lazy(() => UserCreateNestedManyWithoutStudiosJoinedInputSchema).optional(),
  rooms: z.lazy(() => RoomCreateNestedManyWithoutStudioInputSchema).optional()
}).strict();

export default StudioCreateWithoutCreatorInputSchema;
