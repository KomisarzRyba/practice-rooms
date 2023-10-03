import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedOneWithoutStudiosCreatedInputSchema } from './UserCreateNestedOneWithoutStudiosCreatedInputSchema';
import { UserCreateNestedManyWithoutStudiosJoinedInputSchema } from './UserCreateNestedManyWithoutStudiosJoinedInputSchema';

export const StudioCreateWithoutRoomsInputSchema: z.ZodType<Prisma.StudioCreateWithoutRoomsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  creator: z.lazy(() => UserCreateNestedOneWithoutStudiosCreatedInputSchema),
  members: z.lazy(() => UserCreateNestedManyWithoutStudiosJoinedInputSchema).optional()
}).strict();

export default StudioCreateWithoutRoomsInputSchema;
