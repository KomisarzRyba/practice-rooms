import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const SchedulePropertiesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SchedulePropertiesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SchedulePropertiesScalarWhereWithAggregatesInputSchema),z.lazy(() => SchedulePropertiesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SchedulePropertiesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SchedulePropertiesScalarWhereWithAggregatesInputSchema),z.lazy(() => SchedulePropertiesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  studioId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  dayStart: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  dayEnd: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default SchedulePropertiesScalarWhereWithAggregatesInputSchema;
