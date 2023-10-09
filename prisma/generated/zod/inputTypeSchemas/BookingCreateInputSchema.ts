import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedOneWithoutBookingInputSchema } from './UserCreateNestedOneWithoutBookingInputSchema';
import { RoomCreateNestedOneWithoutBookingInputSchema } from './RoomCreateNestedOneWithoutBookingInputSchema';

export const BookingCreateInputSchema: z.ZodType<Prisma.BookingCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  owner: z.lazy(() => UserCreateNestedOneWithoutBookingInputSchema),
  room: z.lazy(() => RoomCreateNestedOneWithoutBookingInputSchema)
}).strict();

export default BookingCreateInputSchema;
