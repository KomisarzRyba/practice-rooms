import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SchedulePropertiesWhereInputSchema } from './SchedulePropertiesWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StudioRelationFilterSchema } from './StudioRelationFilterSchema';
import { StudioWhereInputSchema } from './StudioWhereInputSchema';

export const SchedulePropertiesWhereUniqueInputSchema: z.ZodType<Prisma.SchedulePropertiesWhereUniqueInput> = z.object({
  studioId: z.string()
})
.and(z.object({
  studioId: z.string().optional(),
  AND: z.union([ z.lazy(() => SchedulePropertiesWhereInputSchema),z.lazy(() => SchedulePropertiesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SchedulePropertiesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SchedulePropertiesWhereInputSchema),z.lazy(() => SchedulePropertiesWhereInputSchema).array() ]).optional(),
  dayStart: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  dayEnd: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  studio: z.union([ z.lazy(() => StudioRelationFilterSchema),z.lazy(() => StudioWhereInputSchema) ]).optional(),
}).strict());

export default SchedulePropertiesWhereUniqueInputSchema;
