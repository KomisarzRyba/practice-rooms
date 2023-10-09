import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SchedulePropertiesWhereInputSchema } from './SchedulePropertiesWhereInputSchema';

export const SchedulePropertiesNullableRelationFilterSchema: z.ZodType<Prisma.SchedulePropertiesNullableRelationFilter> = z.object({
  is: z.lazy(() => SchedulePropertiesWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => SchedulePropertiesWhereInputSchema).optional().nullable()
}).strict();

export default SchedulePropertiesNullableRelationFilterSchema;
