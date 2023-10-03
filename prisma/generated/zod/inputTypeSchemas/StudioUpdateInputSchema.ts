import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutStudiosCreatedNestedInputSchema } from './UserUpdateOneRequiredWithoutStudiosCreatedNestedInputSchema';
import { UserUpdateManyWithoutStudiosJoinedNestedInputSchema } from './UserUpdateManyWithoutStudiosJoinedNestedInputSchema';
import { RoomUpdateManyWithoutStudioNestedInputSchema } from './RoomUpdateManyWithoutStudioNestedInputSchema';

export const StudioUpdateInputSchema: z.ZodType<Prisma.StudioUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  creator: z.lazy(() => UserUpdateOneRequiredWithoutStudiosCreatedNestedInputSchema).optional(),
  members: z.lazy(() => UserUpdateManyWithoutStudiosJoinedNestedInputSchema).optional(),
  rooms: z.lazy(() => RoomUpdateManyWithoutStudioNestedInputSchema).optional()
}).strict();

export default StudioUpdateInputSchema;
