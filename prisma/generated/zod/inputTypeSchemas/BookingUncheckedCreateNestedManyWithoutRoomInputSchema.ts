import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BookingCreateWithoutRoomInputSchema } from './BookingCreateWithoutRoomInputSchema';
import { BookingUncheckedCreateWithoutRoomInputSchema } from './BookingUncheckedCreateWithoutRoomInputSchema';
import { BookingCreateOrConnectWithoutRoomInputSchema } from './BookingCreateOrConnectWithoutRoomInputSchema';
import { BookingCreateManyRoomInputEnvelopeSchema } from './BookingCreateManyRoomInputEnvelopeSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';

export const BookingUncheckedCreateNestedManyWithoutRoomInputSchema: z.ZodType<Prisma.BookingUncheckedCreateNestedManyWithoutRoomInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutRoomInputSchema),z.lazy(() => BookingCreateWithoutRoomInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutRoomInputSchema),z.lazy(() => BookingUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutRoomInputSchema),z.lazy(() => BookingCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyRoomInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingUncheckedCreateNestedManyWithoutRoomInputSchema;
