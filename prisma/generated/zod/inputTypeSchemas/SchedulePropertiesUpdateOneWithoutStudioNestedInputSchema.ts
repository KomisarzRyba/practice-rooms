import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SchedulePropertiesCreateWithoutStudioInputSchema } from './SchedulePropertiesCreateWithoutStudioInputSchema';
import { SchedulePropertiesUncheckedCreateWithoutStudioInputSchema } from './SchedulePropertiesUncheckedCreateWithoutStudioInputSchema';
import { SchedulePropertiesCreateOrConnectWithoutStudioInputSchema } from './SchedulePropertiesCreateOrConnectWithoutStudioInputSchema';
import { SchedulePropertiesUpsertWithoutStudioInputSchema } from './SchedulePropertiesUpsertWithoutStudioInputSchema';
import { SchedulePropertiesWhereInputSchema } from './SchedulePropertiesWhereInputSchema';
import { SchedulePropertiesWhereUniqueInputSchema } from './SchedulePropertiesWhereUniqueInputSchema';
import { SchedulePropertiesUpdateToOneWithWhereWithoutStudioInputSchema } from './SchedulePropertiesUpdateToOneWithWhereWithoutStudioInputSchema';
import { SchedulePropertiesUpdateWithoutStudioInputSchema } from './SchedulePropertiesUpdateWithoutStudioInputSchema';
import { SchedulePropertiesUncheckedUpdateWithoutStudioInputSchema } from './SchedulePropertiesUncheckedUpdateWithoutStudioInputSchema';

export const SchedulePropertiesUpdateOneWithoutStudioNestedInputSchema: z.ZodType<Prisma.SchedulePropertiesUpdateOneWithoutStudioNestedInput> = z.object({
  create: z.union([ z.lazy(() => SchedulePropertiesCreateWithoutStudioInputSchema),z.lazy(() => SchedulePropertiesUncheckedCreateWithoutStudioInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SchedulePropertiesCreateOrConnectWithoutStudioInputSchema).optional(),
  upsert: z.lazy(() => SchedulePropertiesUpsertWithoutStudioInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => SchedulePropertiesWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => SchedulePropertiesWhereInputSchema) ]).optional(),
  connect: z.lazy(() => SchedulePropertiesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SchedulePropertiesUpdateToOneWithWhereWithoutStudioInputSchema),z.lazy(() => SchedulePropertiesUpdateWithoutStudioInputSchema),z.lazy(() => SchedulePropertiesUncheckedUpdateWithoutStudioInputSchema) ]).optional(),
}).strict();

export default SchedulePropertiesUpdateOneWithoutStudioNestedInputSchema;
