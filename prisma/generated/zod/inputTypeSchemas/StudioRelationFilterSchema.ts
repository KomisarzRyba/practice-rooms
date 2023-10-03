import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioWhereInputSchema } from './StudioWhereInputSchema';

export const StudioRelationFilterSchema: z.ZodType<Prisma.StudioRelationFilter> = z.object({
  is: z.lazy(() => StudioWhereInputSchema).optional(),
  isNot: z.lazy(() => StudioWhereInputSchema).optional()
}).strict();

export default StudioRelationFilterSchema;
