import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SchedulePropertiesWhereInputSchema } from './SchedulePropertiesWhereInputSchema';
import { SchedulePropertiesUpdateWithoutStudioInputSchema } from './SchedulePropertiesUpdateWithoutStudioInputSchema';
import { SchedulePropertiesUncheckedUpdateWithoutStudioInputSchema } from './SchedulePropertiesUncheckedUpdateWithoutStudioInputSchema';

export const SchedulePropertiesUpdateToOneWithWhereWithoutStudioInputSchema: z.ZodType<Prisma.SchedulePropertiesUpdateToOneWithWhereWithoutStudioInput> = z.object({
  where: z.lazy(() => SchedulePropertiesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SchedulePropertiesUpdateWithoutStudioInputSchema),z.lazy(() => SchedulePropertiesUncheckedUpdateWithoutStudioInputSchema) ]),
}).strict();

export default SchedulePropertiesUpdateToOneWithWhereWithoutStudioInputSchema;
