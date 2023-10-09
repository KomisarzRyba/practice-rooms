import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SchedulePropertiesCreateManyInputSchema: z.ZodType<Prisma.SchedulePropertiesCreateManyInput> = z.object({
  studioId: z.string(),
  dayStart: z.coerce.date(),
  dayEnd: z.coerce.date()
}).strict();

export default SchedulePropertiesCreateManyInputSchema;
