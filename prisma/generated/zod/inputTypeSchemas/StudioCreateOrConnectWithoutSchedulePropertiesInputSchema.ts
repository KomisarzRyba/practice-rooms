import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioWhereUniqueInputSchema } from './StudioWhereUniqueInputSchema';
import { StudioCreateWithoutSchedulePropertiesInputSchema } from './StudioCreateWithoutSchedulePropertiesInputSchema';
import { StudioUncheckedCreateWithoutSchedulePropertiesInputSchema } from './StudioUncheckedCreateWithoutSchedulePropertiesInputSchema';

export const StudioCreateOrConnectWithoutSchedulePropertiesInputSchema: z.ZodType<Prisma.StudioCreateOrConnectWithoutSchedulePropertiesInput> = z.object({
  where: z.lazy(() => StudioWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StudioCreateWithoutSchedulePropertiesInputSchema),z.lazy(() => StudioUncheckedCreateWithoutSchedulePropertiesInputSchema) ]),
}).strict();

export default StudioCreateOrConnectWithoutSchedulePropertiesInputSchema;
