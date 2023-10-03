import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoomUncheckedCreateNestedManyWithoutStudioInputSchema } from './RoomUncheckedCreateNestedManyWithoutStudioInputSchema';

export const StudioUncheckedCreateWithoutMembersInputSchema: z.ZodType<Prisma.StudioUncheckedCreateWithoutMembersInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  creatorId: z.string(),
  rooms: z.lazy(() => RoomUncheckedCreateNestedManyWithoutStudioInputSchema).optional()
}).strict();

export default StudioUncheckedCreateWithoutMembersInputSchema;
