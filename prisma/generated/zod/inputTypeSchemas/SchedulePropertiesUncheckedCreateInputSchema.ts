import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SchedulePropertiesUncheckedCreateInputSchema: z.ZodType<Prisma.SchedulePropertiesUncheckedCreateInput> = z.object({
  studioId: z.string(),
  dayStart: z.coerce.date(),
  dayEnd: z.coerce.date()
}).strict();

export default SchedulePropertiesUncheckedCreateInputSchema;
