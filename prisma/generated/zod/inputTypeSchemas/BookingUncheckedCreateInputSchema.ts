import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const BookingUncheckedCreateInputSchema: z.ZodType<Prisma.BookingUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  ownerId: z.string(),
  roomId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date()
}).strict();

export default BookingUncheckedCreateInputSchema;
