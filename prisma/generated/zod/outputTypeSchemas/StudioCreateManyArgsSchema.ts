import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudioCreateManyInputSchema } from '../inputTypeSchemas/StudioCreateManyInputSchema'

export const StudioCreateManyArgsSchema: z.ZodType<Prisma.StudioCreateManyArgs> = z.object({
  data: z.union([ StudioCreateManyInputSchema,StudioCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default StudioCreateManyArgsSchema;
