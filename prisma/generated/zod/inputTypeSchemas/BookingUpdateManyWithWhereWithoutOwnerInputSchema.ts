import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BookingScalarWhereInputSchema } from './BookingScalarWhereInputSchema';
import { BookingUpdateManyMutationInputSchema } from './BookingUpdateManyMutationInputSchema';
import { BookingUncheckedUpdateManyWithoutOwnerInputSchema } from './BookingUncheckedUpdateManyWithoutOwnerInputSchema';

export const BookingUpdateManyWithWhereWithoutOwnerInputSchema: z.ZodType<Prisma.BookingUpdateManyWithWhereWithoutOwnerInput> = z.object({
  where: z.lazy(() => BookingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateManyMutationInputSchema),z.lazy(() => BookingUncheckedUpdateManyWithoutOwnerInputSchema) ]),
}).strict();

export default BookingUpdateManyWithWhereWithoutOwnerInputSchema;
