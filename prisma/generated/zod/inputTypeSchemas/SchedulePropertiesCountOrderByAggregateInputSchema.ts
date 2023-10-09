import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SchedulePropertiesCountOrderByAggregateInputSchema: z.ZodType<Prisma.SchedulePropertiesCountOrderByAggregateInput> = z.object({
  studioId: z.lazy(() => SortOrderSchema).optional(),
  dayStart: z.lazy(() => SortOrderSchema).optional(),
  dayEnd: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SchedulePropertiesCountOrderByAggregateInputSchema;
