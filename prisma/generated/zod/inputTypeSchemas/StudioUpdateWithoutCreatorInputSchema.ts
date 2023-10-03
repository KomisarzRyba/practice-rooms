import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { UserUpdateManyWithoutStudiosJoinedNestedInputSchema } from './UserUpdateManyWithoutStudiosJoinedNestedInputSchema';
import { RoomUpdateManyWithoutStudioNestedInputSchema } from './RoomUpdateManyWithoutStudioNestedInputSchema';

export const StudioUpdateWithoutCreatorInputSchema: z.ZodType<Prisma.StudioUpdateWithoutCreatorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  members: z.lazy(() => UserUpdateManyWithoutStudiosJoinedNestedInputSchema).optional(),
  rooms: z.lazy(() => RoomUpdateManyWithoutStudioNestedInputSchema).optional()
}).strict();

export default StudioUpdateWithoutCreatorInputSchema;