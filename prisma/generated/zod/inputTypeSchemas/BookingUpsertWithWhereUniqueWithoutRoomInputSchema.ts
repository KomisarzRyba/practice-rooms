import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithoutRoomInputSchema } from './BookingUpdateWithoutRoomInputSchema';
import { BookingUncheckedUpdateWithoutRoomInputSchema } from './BookingUncheckedUpdateWithoutRoomInputSchema';
import { BookingCreateWithoutRoomInputSchema } from './BookingCreateWithoutRoomInputSchema';
import { BookingUncheckedCreateWithoutRoomInputSchema } from './BookingUncheckedCreateWithoutRoomInputSchema';

export const BookingUpsertWithWhereUniqueWithoutRoomInputSchema: z.ZodType<Prisma.BookingUpsertWithWhereUniqueWithoutRoomInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingUpdateWithoutRoomInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutRoomInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutRoomInputSchema),z.lazy(() => BookingUncheckedCreateWithoutRoomInputSchema) ]),
}).strict();

export default BookingUpsertWithWhereUniqueWithoutRoomInputSchema;
