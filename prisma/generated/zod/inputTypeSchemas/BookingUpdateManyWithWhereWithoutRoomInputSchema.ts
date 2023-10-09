import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BookingScalarWhereInputSchema } from './BookingScalarWhereInputSchema';
import { BookingUpdateManyMutationInputSchema } from './BookingUpdateManyMutationInputSchema';
import { BookingUncheckedUpdateManyWithoutRoomInputSchema } from './BookingUncheckedUpdateManyWithoutRoomInputSchema';

export const BookingUpdateManyWithWhereWithoutRoomInputSchema: z.ZodType<Prisma.BookingUpdateManyWithWhereWithoutRoomInput> = z.object({
  where: z.lazy(() => BookingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateManyMutationInputSchema),z.lazy(() => BookingUncheckedUpdateManyWithoutRoomInputSchema) ]),
}).strict();

export default BookingUpdateManyWithWhereWithoutRoomInputSchema;
