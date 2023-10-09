import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { RoomUpdateOneRequiredWithoutBookingNestedInputSchema } from './RoomUpdateOneRequiredWithoutBookingNestedInputSchema';

export const BookingUpdateWithoutOwnerInputSchema: z.ZodType<Prisma.BookingUpdateWithoutOwnerInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  room: z.lazy(() => RoomUpdateOneRequiredWithoutBookingNestedInputSchema).optional()
}).strict();

export default BookingUpdateWithoutOwnerInputSchema;
