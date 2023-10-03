import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { RoomCountOrderByAggregateInputSchema } from './RoomCountOrderByAggregateInputSchema';
import { RoomMaxOrderByAggregateInputSchema } from './RoomMaxOrderByAggregateInputSchema';
import { RoomMinOrderByAggregateInputSchema } from './RoomMinOrderByAggregateInputSchema';

export const RoomOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoomOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  studioId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RoomCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RoomMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RoomMinOrderByAggregateInputSchema).optional()
}).strict();

export default RoomOrderByWithAggregationInputSchema;
