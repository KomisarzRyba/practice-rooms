import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudioWhereInputSchema } from '../inputTypeSchemas/StudioWhereInputSchema'

export const StudioDeleteManyArgsSchema: z.ZodType<Prisma.StudioDeleteManyArgs> = z.object({
  where: StudioWhereInputSchema.optional(),
}).strict()

export default StudioDeleteManyArgsSchema;
