import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SchedulePropertiesWhereUniqueInputSchema } from './SchedulePropertiesWhereUniqueInputSchema';
import { SchedulePropertiesCreateWithoutStudioInputSchema } from './SchedulePropertiesCreateWithoutStudioInputSchema';
import { SchedulePropertiesUncheckedCreateWithoutStudioInputSchema } from './SchedulePropertiesUncheckedCreateWithoutStudioInputSchema';

export const SchedulePropertiesCreateOrConnectWithoutStudioInputSchema: z.ZodType<Prisma.SchedulePropertiesCreateOrConnectWithoutStudioInput> = z.object({
  where: z.lazy(() => SchedulePropertiesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SchedulePropertiesCreateWithoutStudioInputSchema),z.lazy(() => SchedulePropertiesUncheckedCreateWithoutStudioInputSchema) ]),
}).strict();

export default SchedulePropertiesCreateOrConnectWithoutStudioInputSchema;
