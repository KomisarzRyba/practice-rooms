import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BookingCreateManyOwnerInputSchema } from './BookingCreateManyOwnerInputSchema';

export const BookingCreateManyOwnerInputEnvelopeSchema: z.ZodType<Prisma.BookingCreateManyOwnerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingCreateManyOwnerInputSchema),z.lazy(() => BookingCreateManyOwnerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingCreateManyOwnerInputEnvelopeSchema;
