import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const RoomCreateWithoutStudioInputSchema: z.ZodType<Prisma.RoomCreateWithoutStudioInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string()
}).strict();

export default RoomCreateWithoutStudioInputSchema;
