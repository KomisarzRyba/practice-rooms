import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SchedulePropertiesCountOrderByAggregateInputSchema } from './SchedulePropertiesCountOrderByAggregateInputSchema';
import { SchedulePropertiesMaxOrderByAggregateInputSchema } from './SchedulePropertiesMaxOrderByAggregateInputSchema';
import { SchedulePropertiesMinOrderByAggregateInputSchema } from './SchedulePropertiesMinOrderByAggregateInputSchema';

export const SchedulePropertiesOrderByWithAggregationInputSchema: z.ZodType<Prisma.SchedulePropertiesOrderByWithAggregationInput> = z.object({
  studioId: z.lazy(() => SortOrderSchema).optional(),
  dayStart: z.lazy(() => SortOrderSchema).optional(),
  dayEnd: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SchedulePropertiesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SchedulePropertiesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SchedulePropertiesMinOrderByAggregateInputSchema).optional()
}).strict();

export default SchedulePropertiesOrderByWithAggregationInputSchema;
