import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const RoomUncheckedCreateInputSchema: z.ZodType<Prisma.RoomUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  studioId: z.string()
}).strict();

export default RoomUncheckedCreateInputSchema;
