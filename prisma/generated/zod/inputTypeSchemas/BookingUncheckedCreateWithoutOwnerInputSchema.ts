import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const BookingUncheckedCreateWithoutOwnerInputSchema: z.ZodType<Prisma.BookingUncheckedCreateWithoutOwnerInput> = z.object({
  id: z.number().int().optional(),
  roomId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date()
}).strict();

export default BookingUncheckedCreateWithoutOwnerInputSchema;
