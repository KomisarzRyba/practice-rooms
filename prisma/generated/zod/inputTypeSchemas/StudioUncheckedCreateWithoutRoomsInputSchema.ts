import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutStudiosJoinedInputSchema } from './UserUncheckedCreateNestedManyWithoutStudiosJoinedInputSchema';

export const StudioUncheckedCreateWithoutRoomsInputSchema: z.ZodType<Prisma.StudioUncheckedCreateWithoutRoomsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  creatorId: z.string(),
  members: z.lazy(() => UserUncheckedCreateNestedManyWithoutStudiosJoinedInputSchema).optional()
}).strict();

export default StudioUncheckedCreateWithoutRoomsInputSchema;
