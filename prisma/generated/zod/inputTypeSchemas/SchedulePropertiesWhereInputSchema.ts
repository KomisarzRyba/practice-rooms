import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StudioRelationFilterSchema } from './StudioRelationFilterSchema';
import { StudioWhereInputSchema } from './StudioWhereInputSchema';

export const SchedulePropertiesWhereInputSchema: z.ZodType<Prisma.SchedulePropertiesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SchedulePropertiesWhereInputSchema),z.lazy(() => SchedulePropertiesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SchedulePropertiesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SchedulePropertiesWhereInputSchema),z.lazy(() => SchedulePropertiesWhereInputSchema).array() ]).optional(),
  studioId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dayStart: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  dayEnd: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  studio: z.union([ z.lazy(() => StudioRelationFilterSchema),z.lazy(() => StudioWhereInputSchema) ]).optional(),
}).strict();

export default SchedulePropertiesWhereInputSchema;
