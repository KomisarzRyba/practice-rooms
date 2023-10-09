import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoomCreateNestedOneWithoutBookingInputSchema } from './RoomCreateNestedOneWithoutBookingInputSchema';

export const BookingCreateWithoutOwnerInputSchema: z.ZodType<Prisma.BookingCreateWithoutOwnerInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  room: z.lazy(() => RoomCreateNestedOneWithoutBookingInputSchema)
}).strict();

export default BookingCreateWithoutOwnerInputSchema;
