import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioCreateNestedOneWithoutSchedulePropertiesInputSchema } from './StudioCreateNestedOneWithoutSchedulePropertiesInputSchema';

export const SchedulePropertiesCreateInputSchema: z.ZodType<Prisma.SchedulePropertiesCreateInput> = z.object({
  dayStart: z.coerce.date(),
  dayEnd: z.coerce.date(),
  studio: z.lazy(() => StudioCreateNestedOneWithoutSchedulePropertiesInputSchema)
}).strict();

export default SchedulePropertiesCreateInputSchema;
