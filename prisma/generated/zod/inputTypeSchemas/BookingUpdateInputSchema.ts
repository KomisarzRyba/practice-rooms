import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutBookingNestedInputSchema } from './UserUpdateOneRequiredWithoutBookingNestedInputSchema';
import { RoomUpdateOneRequiredWithoutBookingNestedInputSchema } from './RoomUpdateOneRequiredWithoutBookingNestedInputSchema';

export const BookingUpdateInputSchema: z.ZodType<Prisma.BookingUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutBookingNestedInputSchema).optional(),
  room: z.lazy(() => RoomUpdateOneRequiredWithoutBookingNestedInputSchema).optional()
}).strict();

export default BookingUpdateInputSchema;
