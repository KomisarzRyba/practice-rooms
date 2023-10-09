import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioCreateWithoutSchedulePropertiesInputSchema } from './StudioCreateWithoutSchedulePropertiesInputSchema';
import { StudioUncheckedCreateWithoutSchedulePropertiesInputSchema } from './StudioUncheckedCreateWithoutSchedulePropertiesInputSchema';
import { StudioCreateOrConnectWithoutSchedulePropertiesInputSchema } from './StudioCreateOrConnectWithoutSchedulePropertiesInputSchema';
import { StudioWhereUniqueInputSchema } from './StudioWhereUniqueInputSchema';

export const StudioCreateNestedOneWithoutSchedulePropertiesInputSchema: z.ZodType<Prisma.StudioCreateNestedOneWithoutSchedulePropertiesInput> = z.object({
  create: z.union([ z.lazy(() => StudioCreateWithoutSchedulePropertiesInputSchema),z.lazy(() => StudioUncheckedCreateWithoutSchedulePropertiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StudioCreateOrConnectWithoutSchedulePropertiesInputSchema).optional(),
  connect: z.lazy(() => StudioWhereUniqueInputSchema).optional()
}).strict();

export default StudioCreateNestedOneWithoutSchedulePropertiesInputSchema;
