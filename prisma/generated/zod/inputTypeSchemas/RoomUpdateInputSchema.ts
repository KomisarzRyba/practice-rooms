import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { StudioUpdateOneRequiredWithoutRoomsNestedInputSchema } from './StudioUpdateOneRequiredWithoutRoomsNestedInputSchema';
import { BookingUpdateManyWithoutRoomNestedInputSchema } from './BookingUpdateManyWithoutRoomNestedInputSchema';

export const RoomUpdateInputSchema: z.ZodType<Prisma.RoomUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  studio: z.lazy(() => StudioUpdateOneRequiredWithoutRoomsNestedInputSchema).optional(),
  Booking: z.lazy(() => BookingUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export default RoomUpdateInputSchema;
