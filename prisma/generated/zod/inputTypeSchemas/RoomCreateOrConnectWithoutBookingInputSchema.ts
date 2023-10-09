import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoomWhereUniqueInputSchema } from './RoomWhereUniqueInputSchema';
import { RoomCreateWithoutBookingInputSchema } from './RoomCreateWithoutBookingInputSchema';
import { RoomUncheckedCreateWithoutBookingInputSchema } from './RoomUncheckedCreateWithoutBookingInputSchema';

export const RoomCreateOrConnectWithoutBookingInputSchema: z.ZodType<Prisma.RoomCreateOrConnectWithoutBookingInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoomCreateWithoutBookingInputSchema),z.lazy(() => RoomUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export default RoomCreateOrConnectWithoutBookingInputSchema;
