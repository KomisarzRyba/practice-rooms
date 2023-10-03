import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const RoomCreateManyStudioInputSchema: z.ZodType<Prisma.RoomCreateManyStudioInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string()
}).strict();

export default RoomCreateManyStudioInputSchema;
