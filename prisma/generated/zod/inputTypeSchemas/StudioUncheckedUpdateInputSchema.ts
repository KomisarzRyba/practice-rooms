import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { UserUncheckedUpdateManyWithoutStudiosJoinedNestedInputSchema } from './UserUncheckedUpdateManyWithoutStudiosJoinedNestedInputSchema';
import { RoomUncheckedUpdateManyWithoutStudioNestedInputSchema } from './RoomUncheckedUpdateManyWithoutStudioNestedInputSchema';

export const StudioUncheckedUpdateInputSchema: z.ZodType<Prisma.StudioUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  creatorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  members: z.lazy(() => UserUncheckedUpdateManyWithoutStudiosJoinedNestedInputSchema).optional(),
  rooms: z.lazy(() => RoomUncheckedUpdateManyWithoutStudioNestedInputSchema).optional()
}).strict();

export default StudioUncheckedUpdateInputSchema;
