import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SchedulePropertiesCreateWithoutStudioInputSchema } from './SchedulePropertiesCreateWithoutStudioInputSchema';
import { SchedulePropertiesUncheckedCreateWithoutStudioInputSchema } from './SchedulePropertiesUncheckedCreateWithoutStudioInputSchema';
import { SchedulePropertiesCreateOrConnectWithoutStudioInputSchema } from './SchedulePropertiesCreateOrConnectWithoutStudioInputSchema';
import { SchedulePropertiesWhereUniqueInputSchema } from './SchedulePropertiesWhereUniqueInputSchema';

export const SchedulePropertiesUncheckedCreateNestedOneWithoutStudioInputSchema: z.ZodType<Prisma.SchedulePropertiesUncheckedCreateNestedOneWithoutStudioInput> = z.object({
  create: z.union([ z.lazy(() => SchedulePropertiesCreateWithoutStudioInputSchema),z.lazy(() => SchedulePropertiesUncheckedCreateWithoutStudioInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SchedulePropertiesCreateOrConnectWithoutStudioInputSchema).optional(),
  connect: z.lazy(() => SchedulePropertiesWhereUniqueInputSchema).optional()
}).strict();

export default SchedulePropertiesUncheckedCreateNestedOneWithoutStudioInputSchema;
