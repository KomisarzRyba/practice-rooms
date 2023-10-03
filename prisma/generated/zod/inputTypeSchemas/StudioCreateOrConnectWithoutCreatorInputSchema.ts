import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioWhereUniqueInputSchema } from './StudioWhereUniqueInputSchema';
import { StudioCreateWithoutCreatorInputSchema } from './StudioCreateWithoutCreatorInputSchema';
import { StudioUncheckedCreateWithoutCreatorInputSchema } from './StudioUncheckedCreateWithoutCreatorInputSchema';

export const StudioCreateOrConnectWithoutCreatorInputSchema: z.ZodType<Prisma.StudioCreateOrConnectWithoutCreatorInput> = z.object({
  where: z.lazy(() => StudioWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StudioCreateWithoutCreatorInputSchema),z.lazy(() => StudioUncheckedCreateWithoutCreatorInputSchema) ]),
}).strict();

export default StudioCreateOrConnectWithoutCreatorInputSchema;
