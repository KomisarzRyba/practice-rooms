import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const RoomUncheckedCreateWithoutStudioInputSchema: z.ZodType<Prisma.RoomUncheckedCreateWithoutStudioInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string()
}).strict();

export default RoomUncheckedCreateWithoutStudioInputSchema;
