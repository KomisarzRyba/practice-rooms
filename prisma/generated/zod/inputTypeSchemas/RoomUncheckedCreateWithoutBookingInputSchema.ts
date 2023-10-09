import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const RoomUncheckedCreateWithoutBookingInputSchema: z.ZodType<Prisma.RoomUncheckedCreateWithoutBookingInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  studioId: z.string()
}).strict();

export default RoomUncheckedCreateWithoutBookingInputSchema;
