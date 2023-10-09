import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithoutRoomInputSchema } from './BookingUpdateWithoutRoomInputSchema';
import { BookingUncheckedUpdateWithoutRoomInputSchema } from './BookingUncheckedUpdateWithoutRoomInputSchema';

export const BookingUpdateWithWhereUniqueWithoutRoomInputSchema: z.ZodType<Prisma.BookingUpdateWithWhereUniqueWithoutRoomInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateWithoutRoomInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutRoomInputSchema) ]),
}).strict();

export default BookingUpdateWithWhereUniqueWithoutRoomInputSchema;
