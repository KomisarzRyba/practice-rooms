import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingCreateWithoutOwnerInputSchema } from './BookingCreateWithoutOwnerInputSchema';
import { BookingUncheckedCreateWithoutOwnerInputSchema } from './BookingUncheckedCreateWithoutOwnerInputSchema';

export const BookingCreateOrConnectWithoutOwnerInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutOwnerInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutOwnerInputSchema),z.lazy(() => BookingUncheckedCreateWithoutOwnerInputSchema) ]),
}).strict();

export default BookingCreateOrConnectWithoutOwnerInputSchema;
