import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithoutOwnerInputSchema } from './BookingUpdateWithoutOwnerInputSchema';
import { BookingUncheckedUpdateWithoutOwnerInputSchema } from './BookingUncheckedUpdateWithoutOwnerInputSchema';
import { BookingCreateWithoutOwnerInputSchema } from './BookingCreateWithoutOwnerInputSchema';
import { BookingUncheckedCreateWithoutOwnerInputSchema } from './BookingUncheckedCreateWithoutOwnerInputSchema';

export const BookingUpsertWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.BookingUpsertWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingUpdateWithoutOwnerInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutOwnerInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutOwnerInputSchema),z.lazy(() => BookingUncheckedCreateWithoutOwnerInputSchema) ]),
}).strict();

export default BookingUpsertWithWhereUniqueWithoutOwnerInputSchema;
