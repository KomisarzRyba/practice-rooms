import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoomUpdateWithoutBookingInputSchema } from './RoomUpdateWithoutBookingInputSchema';
import { RoomUncheckedUpdateWithoutBookingInputSchema } from './RoomUncheckedUpdateWithoutBookingInputSchema';
import { RoomCreateWithoutBookingInputSchema } from './RoomCreateWithoutBookingInputSchema';
import { RoomUncheckedCreateWithoutBookingInputSchema } from './RoomUncheckedCreateWithoutBookingInputSchema';
import { RoomWhereInputSchema } from './RoomWhereInputSchema';

export const RoomUpsertWithoutBookingInputSchema: z.ZodType<Prisma.RoomUpsertWithoutBookingInput> = z.object({
  update: z.union([ z.lazy(() => RoomUpdateWithoutBookingInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutBookingInputSchema) ]),
  create: z.union([ z.lazy(() => RoomCreateWithoutBookingInputSchema),z.lazy(() => RoomUncheckedCreateWithoutBookingInputSchema) ]),
  where: z.lazy(() => RoomWhereInputSchema).optional()
}).strict();

export default RoomUpsertWithoutBookingInputSchema;
