import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioWhereInputSchema } from './StudioWhereInputSchema';
import { StudioUpdateWithoutSchedulePropertiesInputSchema } from './StudioUpdateWithoutSchedulePropertiesInputSchema';
import { StudioUncheckedUpdateWithoutSchedulePropertiesInputSchema } from './StudioUncheckedUpdateWithoutSchedulePropertiesInputSchema';

export const StudioUpdateToOneWithWhereWithoutSchedulePropertiesInputSchema: z.ZodType<Prisma.StudioUpdateToOneWithWhereWithoutSchedulePropertiesInput> = z.object({
  where: z.lazy(() => StudioWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StudioUpdateWithoutSchedulePropertiesInputSchema),z.lazy(() => StudioUncheckedUpdateWithoutSchedulePropertiesInputSchema) ]),
}).strict();

export default StudioUpdateToOneWithWhereWithoutSchedulePropertiesInputSchema;
