import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { RoomUncheckedUpdateManyWithoutStudioNestedInputSchema } from './RoomUncheckedUpdateManyWithoutStudioNestedInputSchema';

export const StudioUncheckedUpdateWithoutMembersInputSchema: z.ZodType<Prisma.StudioUncheckedUpdateWithoutMembersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  creatorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rooms: z.lazy(() => RoomUncheckedUpdateManyWithoutStudioNestedInputSchema).optional()
}).strict();

export default StudioUncheckedUpdateWithoutMembersInputSchema;
