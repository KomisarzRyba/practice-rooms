import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioCreateWithoutSchedulePropertiesInputSchema } from './StudioCreateWithoutSchedulePropertiesInputSchema';
import { StudioUncheckedCreateWithoutSchedulePropertiesInputSchema } from './StudioUncheckedCreateWithoutSchedulePropertiesInputSchema';
import { StudioCreateOrConnectWithoutSchedulePropertiesInputSchema } from './StudioCreateOrConnectWithoutSchedulePropertiesInputSchema';
import { StudioUpsertWithoutSchedulePropertiesInputSchema } from './StudioUpsertWithoutSchedulePropertiesInputSchema';
import { StudioWhereUniqueInputSchema } from './StudioWhereUniqueInputSchema';
import { StudioUpdateToOneWithWhereWithoutSchedulePropertiesInputSchema } from './StudioUpdateToOneWithWhereWithoutSchedulePropertiesInputSchema';
import { StudioUpdateWithoutSchedulePropertiesInputSchema } from './StudioUpdateWithoutSchedulePropertiesInputSchema';
import { StudioUncheckedUpdateWithoutSchedulePropertiesInputSchema } from './StudioUncheckedUpdateWithoutSchedulePropertiesInputSchema';

export const StudioUpdateOneRequiredWithoutSchedulePropertiesNestedInputSchema: z.ZodType<Prisma.StudioUpdateOneRequiredWithoutSchedulePropertiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => StudioCreateWithoutSchedulePropertiesInputSchema),z.lazy(() => StudioUncheckedCreateWithoutSchedulePropertiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StudioCreateOrConnectWithoutSchedulePropertiesInputSchema).optional(),
  upsert: z.lazy(() => StudioUpsertWithoutSchedulePropertiesInputSchema).optional(),
  connect: z.lazy(() => StudioWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StudioUpdateToOneWithWhereWithoutSchedulePropertiesInputSchema),z.lazy(() => StudioUpdateWithoutSchedulePropertiesInputSchema),z.lazy(() => StudioUncheckedUpdateWithoutSchedulePropertiesInputSchema) ]).optional(),
}).strict();

export default StudioUpdateOneRequiredWithoutSchedulePropertiesNestedInputSchema;
