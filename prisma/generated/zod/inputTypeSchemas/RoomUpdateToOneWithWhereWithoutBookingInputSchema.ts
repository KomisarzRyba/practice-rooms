import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoomWhereInputSchema } from './RoomWhereInputSchema';
import { RoomUpdateWithoutBookingInputSchema } from './RoomUpdateWithoutBookingInputSchema';
import { RoomUncheckedUpdateWithoutBookingInputSchema } from './RoomUncheckedUpdateWithoutBookingInputSchema';

export const RoomUpdateToOneWithWhereWithoutBookingInputSchema: z.ZodType<Prisma.RoomUpdateToOneWithWhereWithoutBookingInput> = z.object({
  where: z.lazy(() => RoomWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RoomUpdateWithoutBookingInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutBookingInputSchema) ]),
}).strict();

export default RoomUpdateToOneWithWhereWithoutBookingInputSchema;
