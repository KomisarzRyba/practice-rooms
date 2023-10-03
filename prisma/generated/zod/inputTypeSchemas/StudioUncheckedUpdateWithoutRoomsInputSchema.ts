import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { UserUncheckedUpdateManyWithoutStudiosJoinedNestedInputSchema } from './UserUncheckedUpdateManyWithoutStudiosJoinedNestedInputSchema';

export const StudioUncheckedUpdateWithoutRoomsInputSchema: z.ZodType<Prisma.StudioUncheckedUpdateWithoutRoomsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  creatorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  members: z.lazy(() => UserUncheckedUpdateManyWithoutStudiosJoinedNestedInputSchema).optional()
}).strict();

export default StudioUncheckedUpdateWithoutRoomsInputSchema;
