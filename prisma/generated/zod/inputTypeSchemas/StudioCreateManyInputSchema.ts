import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const StudioCreateManyInputSchema: z.ZodType<Prisma.StudioCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  creatorId: z.string()
}).strict();

export default StudioCreateManyInputSchema;
