import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoomCreateWithoutBookingInputSchema } from './RoomCreateWithoutBookingInputSchema';
import { RoomUncheckedCreateWithoutBookingInputSchema } from './RoomUncheckedCreateWithoutBookingInputSchema';
import { RoomCreateOrConnectWithoutBookingInputSchema } from './RoomCreateOrConnectWithoutBookingInputSchema';
import { RoomUpsertWithoutBookingInputSchema } from './RoomUpsertWithoutBookingInputSchema';
import { RoomWhereUniqueInputSchema } from './RoomWhereUniqueInputSchema';
import { RoomUpdateToOneWithWhereWithoutBookingInputSchema } from './RoomUpdateToOneWithWhereWithoutBookingInputSchema';
import { RoomUpdateWithoutBookingInputSchema } from './RoomUpdateWithoutBookingInputSchema';
import { RoomUncheckedUpdateWithoutBookingInputSchema } from './RoomUncheckedUpdateWithoutBookingInputSchema';

export const RoomUpdateOneRequiredWithoutBookingNestedInputSchema: z.ZodType<Prisma.RoomUpdateOneRequiredWithoutBookingNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutBookingInputSchema),z.lazy(() => RoomUncheckedCreateWithoutBookingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutBookingInputSchema).optional(),
  upsert: z.lazy(() => RoomUpsertWithoutBookingInputSchema).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RoomUpdateToOneWithWhereWithoutBookingInputSchema),z.lazy(() => RoomUpdateWithoutBookingInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutBookingInputSchema) ]).optional(),
}).strict();

export default RoomUpdateOneRequiredWithoutBookingNestedInputSchema;
