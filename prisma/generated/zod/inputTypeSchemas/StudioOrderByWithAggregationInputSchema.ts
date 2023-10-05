import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { StudioCountOrderByAggregateInputSchema } from './StudioCountOrderByAggregateInputSchema';
import { StudioMaxOrderByAggregateInputSchema } from './StudioMaxOrderByAggregateInputSchema';
import { StudioMinOrderByAggregateInputSchema } from './StudioMinOrderByAggregateInputSchema';

export const StudioOrderByWithAggregationInputSchema: z.ZodType<Prisma.StudioOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  creatorId: z.lazy(() => SortOrderSchema).optional(),
  invitedUserEmails: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => StudioCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => StudioMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => StudioMinOrderByAggregateInputSchema).optional()
}).strict();

export default StudioOrderByWithAggregationInputSchema;
