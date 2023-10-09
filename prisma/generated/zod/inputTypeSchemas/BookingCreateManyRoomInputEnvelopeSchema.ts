import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BookingCreateManyRoomInputSchema } from './BookingCreateManyRoomInputSchema';

export const BookingCreateManyRoomInputEnvelopeSchema: z.ZodType<Prisma.BookingCreateManyRoomInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingCreateManyRoomInputSchema),z.lazy(() => BookingCreateManyRoomInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingCreateManyRoomInputEnvelopeSchema;
