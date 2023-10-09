import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SchedulePropertiesUncheckedCreateWithoutStudioInputSchema: z.ZodType<Prisma.SchedulePropertiesUncheckedCreateWithoutStudioInput> = z.object({
  dayStart: z.coerce.date(),
  dayEnd: z.coerce.date()
}).strict();

export default SchedulePropertiesUncheckedCreateWithoutStudioInputSchema;
