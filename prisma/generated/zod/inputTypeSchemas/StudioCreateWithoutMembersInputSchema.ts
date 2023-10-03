import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedOneWithoutStudiosCreatedInputSchema } from './UserCreateNestedOneWithoutStudiosCreatedInputSchema';
import { RoomCreateNestedManyWithoutStudioInputSchema } from './RoomCreateNestedManyWithoutStudioInputSchema';

export const StudioCreateWithoutMembersInputSchema: z.ZodType<Prisma.StudioCreateWithoutMembersInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  creator: z.lazy(() => UserCreateNestedOneWithoutStudiosCreatedInputSchema),
  rooms: z.lazy(() => RoomCreateNestedManyWithoutStudioInputSchema).optional()
}).strict();

export default StudioCreateWithoutMembersInputSchema;
