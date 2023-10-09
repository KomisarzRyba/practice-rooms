import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BookingUpdateManyWithoutRoomNestedInputSchema } from './BookingUpdateManyWithoutRoomNestedInputSchema';

export const RoomUpdateWithoutStudioInputSchema: z.ZodType<Prisma.RoomUpdateWithoutStudioInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Booking: z.lazy(() => BookingUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export default RoomUpdateWithoutStudioInputSchema;
