import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingCreateWithoutRoomInputSchema } from './BookingCreateWithoutRoomInputSchema';
import { BookingUncheckedCreateWithoutRoomInputSchema } from './BookingUncheckedCreateWithoutRoomInputSchema';

export const BookingCreateOrConnectWithoutRoomInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutRoomInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutRoomInputSchema),z.lazy(() => BookingUncheckedCreateWithoutRoomInputSchema) ]),
}).strict();

export default BookingCreateOrConnectWithoutRoomInputSchema;
