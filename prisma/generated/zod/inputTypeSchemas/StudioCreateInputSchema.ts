import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedOneWithoutStudiosCreatedInputSchema } from './UserCreateNestedOneWithoutStudiosCreatedInputSchema';
import { UserCreateNestedManyWithoutStudiosJoinedInputSchema } from './UserCreateNestedManyWithoutStudiosJoinedInputSchema';
import { RoomCreateNestedManyWithoutStudioInputSchema } from './RoomCreateNestedManyWithoutStudioInputSchema';

export const StudioCreateInputSchema: z.ZodType<Prisma.StudioCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  creator: z.lazy(() => UserCreateNestedOneWithoutStudiosCreatedInputSchema),
  members: z.lazy(() => UserCreateNestedManyWithoutStudiosJoinedInputSchema).optional(),
  rooms: z.lazy(() => RoomCreateNestedManyWithoutStudioInputSchema).optional()
}).strict();

export default StudioCreateInputSchema;
