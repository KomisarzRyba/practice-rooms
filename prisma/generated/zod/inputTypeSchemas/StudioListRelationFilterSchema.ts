import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioWhereInputSchema } from './StudioWhereInputSchema';

export const StudioListRelationFilterSchema: z.ZodType<Prisma.StudioListRelationFilter> = z.object({
  every: z.lazy(() => StudioWhereInputSchema).optional(),
  some: z.lazy(() => StudioWhereInputSchema).optional(),
  none: z.lazy(() => StudioWhereInputSchema).optional()
}).strict();

export default StudioListRelationFilterSchema;
