import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithoutOwnerInputSchema } from './BookingUpdateWithoutOwnerInputSchema';
import { BookingUncheckedUpdateWithoutOwnerInputSchema } from './BookingUncheckedUpdateWithoutOwnerInputSchema';

export const BookingUpdateWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.BookingUpdateWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateWithoutOwnerInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutOwnerInputSchema) ]),
}).strict();

export default BookingUpdateWithWhereUniqueWithoutOwnerInputSchema;
