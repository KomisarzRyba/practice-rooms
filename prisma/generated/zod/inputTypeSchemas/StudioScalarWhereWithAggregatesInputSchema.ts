import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const StudioScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StudioScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => StudioScalarWhereWithAggregatesInputSchema),z.lazy(() => StudioScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudioScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudioScalarWhereWithAggregatesInputSchema),z.lazy(() => StudioScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  creatorId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default StudioScalarWhereWithAggregatesInputSchema;
