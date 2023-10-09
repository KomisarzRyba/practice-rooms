import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedOneWithoutBookingInputSchema } from './UserCreateNestedOneWithoutBookingInputSchema';

export const BookingCreateWithoutRoomInputSchema: z.ZodType<Prisma.BookingCreateWithoutRoomInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  owner: z.lazy(() => UserCreateNestedOneWithoutBookingInputSchema)
}).strict();

export default BookingCreateWithoutRoomInputSchema;
