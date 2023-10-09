import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SchedulePropertiesCreateWithoutStudioInputSchema: z.ZodType<Prisma.SchedulePropertiesCreateWithoutStudioInput> = z.object({
  dayStart: z.coerce.date(),
  dayEnd: z.coerce.date()
}).strict();

export default SchedulePropertiesCreateWithoutStudioInputSchema;
