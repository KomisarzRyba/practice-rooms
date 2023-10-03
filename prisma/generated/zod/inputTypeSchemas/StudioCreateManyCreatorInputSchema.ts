import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const StudioCreateManyCreatorInputSchema: z.ZodType<Prisma.StudioCreateManyCreatorInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();

export default StudioCreateManyCreatorInputSchema;
