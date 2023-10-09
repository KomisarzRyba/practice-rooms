import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SchedulePropertiesUpdateWithoutStudioInputSchema } from './SchedulePropertiesUpdateWithoutStudioInputSchema';
import { SchedulePropertiesUncheckedUpdateWithoutStudioInputSchema } from './SchedulePropertiesUncheckedUpdateWithoutStudioInputSchema';
import { SchedulePropertiesCreateWithoutStudioInputSchema } from './SchedulePropertiesCreateWithoutStudioInputSchema';
import { SchedulePropertiesUncheckedCreateWithoutStudioInputSchema } from './SchedulePropertiesUncheckedCreateWithoutStudioInputSchema';
import { SchedulePropertiesWhereInputSchema } from './SchedulePropertiesWhereInputSchema';

export const SchedulePropertiesUpsertWithoutStudioInputSchema: z.ZodType<Prisma.SchedulePropertiesUpsertWithoutStudioInput> = z.object({
  update: z.union([ z.lazy(() => SchedulePropertiesUpdateWithoutStudioInputSchema),z.lazy(() => SchedulePropertiesUncheckedUpdateWithoutStudioInputSchema) ]),
  create: z.union([ z.lazy(() => SchedulePropertiesCreateWithoutStudioInputSchema),z.lazy(() => SchedulePropertiesUncheckedCreateWithoutStudioInputSchema) ]),
  where: z.lazy(() => SchedulePropertiesWhereInputSchema).optional()
}).strict();

export default SchedulePropertiesUpsertWithoutStudioInputSchema;
