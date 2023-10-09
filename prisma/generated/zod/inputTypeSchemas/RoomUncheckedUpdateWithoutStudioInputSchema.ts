import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BookingUncheckedUpdateManyWithoutRoomNestedInputSchema } from './BookingUncheckedUpdateManyWithoutRoomNestedInputSchema';

export const RoomUncheckedUpdateWithoutStudioInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateWithoutStudioInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Booking: z.lazy(() => BookingUncheckedUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export default RoomUncheckedUpdateWithoutStudioInputSchema;
