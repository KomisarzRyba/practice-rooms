import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SchedulePropertiesSelectSchema } from '../inputTypeSchemas/SchedulePropertiesSelectSchema';
import { SchedulePropertiesIncludeSchema } from '../inputTypeSchemas/SchedulePropertiesIncludeSchema';

export const SchedulePropertiesArgsSchema: z.ZodType<Prisma.SchedulePropertiesDefaultArgs> = z.object({
  select: z.lazy(() => SchedulePropertiesSelectSchema).optional(),
  include: z.lazy(() => SchedulePropertiesIncludeSchema).optional(),
}).strict();

export default SchedulePropertiesArgsSchema;
