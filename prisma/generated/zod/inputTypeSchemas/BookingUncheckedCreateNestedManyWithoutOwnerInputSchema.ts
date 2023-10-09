import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BookingCreateWithoutOwnerInputSchema } from './BookingCreateWithoutOwnerInputSchema';
import { BookingUncheckedCreateWithoutOwnerInputSchema } from './BookingUncheckedCreateWithoutOwnerInputSchema';
import { BookingCreateOrConnectWithoutOwnerInputSchema } from './BookingCreateOrConnectWithoutOwnerInputSchema';
import { BookingCreateManyOwnerInputEnvelopeSchema } from './BookingCreateManyOwnerInputEnvelopeSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';

export const BookingUncheckedCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.BookingUncheckedCreateNestedManyWithoutOwnerInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutOwnerInputSchema),z.lazy(() => BookingCreateWithoutOwnerInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => BookingUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => BookingCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyOwnerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingUncheckedCreateNestedManyWithoutOwnerInputSchema;
