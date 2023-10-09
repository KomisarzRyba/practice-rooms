import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioUpdateWithoutSchedulePropertiesInputSchema } from './StudioUpdateWithoutSchedulePropertiesInputSchema';
import { StudioUncheckedUpdateWithoutSchedulePropertiesInputSchema } from './StudioUncheckedUpdateWithoutSchedulePropertiesInputSchema';
import { StudioCreateWithoutSchedulePropertiesInputSchema } from './StudioCreateWithoutSchedulePropertiesInputSchema';
import { StudioUncheckedCreateWithoutSchedulePropertiesInputSchema } from './StudioUncheckedCreateWithoutSchedulePropertiesInputSchema';
import { StudioWhereInputSchema } from './StudioWhereInputSchema';

export const StudioUpsertWithoutSchedulePropertiesInputSchema: z.ZodType<Prisma.StudioUpsertWithoutSchedulePropertiesInput> = z.object({
  update: z.union([ z.lazy(() => StudioUpdateWithoutSchedulePropertiesInputSchema),z.lazy(() => StudioUncheckedUpdateWithoutSchedulePropertiesInputSchema) ]),
  create: z.union([ z.lazy(() => StudioCreateWithoutSchedulePropertiesInputSchema),z.lazy(() => StudioUncheckedCreateWithoutSchedulePropertiesInputSchema) ]),
  where: z.lazy(() => StudioWhereInputSchema).optional()
}).strict();

export default StudioUpsertWithoutSchedulePropertiesInputSchema;
