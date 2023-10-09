import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BookingCreateWithoutRoomInputSchema } from './BookingCreateWithoutRoomInputSchema';
import { BookingUncheckedCreateWithoutRoomInputSchema } from './BookingUncheckedCreateWithoutRoomInputSchema';
import { BookingCreateOrConnectWithoutRoomInputSchema } from './BookingCreateOrConnectWithoutRoomInputSchema';
import { BookingUpsertWithWhereUniqueWithoutRoomInputSchema } from './BookingUpsertWithWhereUniqueWithoutRoomInputSchema';
import { BookingCreateManyRoomInputEnvelopeSchema } from './BookingCreateManyRoomInputEnvelopeSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithWhereUniqueWithoutRoomInputSchema } from './BookingUpdateWithWhereUniqueWithoutRoomInputSchema';
import { BookingUpdateManyWithWhereWithoutRoomInputSchema } from './BookingUpdateManyWithWhereWithoutRoomInputSchema';
import { BookingScalarWhereInputSchema } from './BookingScalarWhereInputSchema';

export const BookingUncheckedUpdateManyWithoutRoomNestedInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateManyWithoutRoomNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutRoomInputSchema),z.lazy(() => BookingCreateWithoutRoomInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutRoomInputSchema),z.lazy(() => BookingUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutRoomInputSchema),z.lazy(() => BookingCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingUpsertWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => BookingUpsertWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyRoomInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingUpdateWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => BookingUpdateWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingUpdateManyWithWhereWithoutRoomInputSchema),z.lazy(() => BookingUpdateManyWithWhereWithoutRoomInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingScalarWhereInputSchema),z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingUncheckedUpdateManyWithoutRoomNestedInputSchema;
