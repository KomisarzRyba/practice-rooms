import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutStudiosJoinedInputSchema } from './UserUncheckedCreateNestedManyWithoutStudiosJoinedInputSchema';
import { RoomUncheckedCreateNestedManyWithoutStudioInputSchema } from './RoomUncheckedCreateNestedManyWithoutStudioInputSchema';

export const StudioUncheckedCreateInputSchema: z.ZodType<Prisma.StudioUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  creatorId: z.string(),
  members: z.lazy(() => UserUncheckedCreateNestedManyWithoutStudiosJoinedInputSchema).optional(),
  rooms: z.lazy(() => RoomUncheckedCreateNestedManyWithoutStudioInputSchema).optional()
}).strict();

export default StudioUncheckedCreateInputSchema;
