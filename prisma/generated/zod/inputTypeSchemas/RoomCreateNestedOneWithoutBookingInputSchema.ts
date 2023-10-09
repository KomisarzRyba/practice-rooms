import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoomCreateWithoutBookingInputSchema } from './RoomCreateWithoutBookingInputSchema';
import { RoomUncheckedCreateWithoutBookingInputSchema } from './RoomUncheckedCreateWithoutBookingInputSchema';
import { RoomCreateOrConnectWithoutBookingInputSchema } from './RoomCreateOrConnectWithoutBookingInputSchema';
import { RoomWhereUniqueInputSchema } from './RoomWhereUniqueInputSchema';

export const RoomCreateNestedOneWithoutBookingInputSchema: z.ZodType<Prisma.RoomCreateNestedOneWithoutBookingInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutBookingInputSchema),z.lazy(() => RoomUncheckedCreateWithoutBookingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutBookingInputSchema).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputSchema).optional()
}).strict();

export default RoomCreateNestedOneWithoutBookingInputSchema;
