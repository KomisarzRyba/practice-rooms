import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BookingCreateWithoutOwnerInputSchema } from './BookingCreateWithoutOwnerInputSchema';
import { BookingUncheckedCreateWithoutOwnerInputSchema } from './BookingUncheckedCreateWithoutOwnerInputSchema';
import { BookingCreateOrConnectWithoutOwnerInputSchema } from './BookingCreateOrConnectWithoutOwnerInputSchema';
import { BookingUpsertWithWhereUniqueWithoutOwnerInputSchema } from './BookingUpsertWithWhereUniqueWithoutOwnerInputSchema';
import { BookingCreateManyOwnerInputEnvelopeSchema } from './BookingCreateManyOwnerInputEnvelopeSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithWhereUniqueWithoutOwnerInputSchema } from './BookingUpdateWithWhereUniqueWithoutOwnerInputSchema';
import { BookingUpdateManyWithWhereWithoutOwnerInputSchema } from './BookingUpdateManyWithWhereWithoutOwnerInputSchema';
import { BookingScalarWhereInputSchema } from './BookingScalarWhereInputSchema';

export const BookingUncheckedUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateManyWithoutOwnerNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutOwnerInputSchema),z.lazy(() => BookingCreateWithoutOwnerInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => BookingUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => BookingCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingUpsertWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => BookingUpsertWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyOwnerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingUpdateWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => BookingUpdateWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingUpdateManyWithWhereWithoutOwnerInputSchema),z.lazy(() => BookingUpdateManyWithWhereWithoutOwnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingScalarWhereInputSchema),z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingUncheckedUpdateManyWithoutOwnerNestedInputSchema;
