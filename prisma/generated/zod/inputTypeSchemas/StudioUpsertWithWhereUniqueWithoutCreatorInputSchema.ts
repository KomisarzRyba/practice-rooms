import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioWhereUniqueInputSchema } from './StudioWhereUniqueInputSchema';
import { StudioUpdateWithoutCreatorInputSchema } from './StudioUpdateWithoutCreatorInputSchema';
import { StudioUncheckedUpdateWithoutCreatorInputSchema } from './StudioUncheckedUpdateWithoutCreatorInputSchema';
import { StudioCreateWithoutCreatorInputSchema } from './StudioCreateWithoutCreatorInputSchema';
import { StudioUncheckedCreateWithoutCreatorInputSchema } from './StudioUncheckedCreateWithoutCreatorInputSchema';

export const StudioUpsertWithWhereUniqueWithoutCreatorInputSchema: z.ZodType<Prisma.StudioUpsertWithWhereUniqueWithoutCreatorInput> = z.object({
  where: z.lazy(() => StudioWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => StudioUpdateWithoutCreatorInputSchema),z.lazy(() => StudioUncheckedUpdateWithoutCreatorInputSchema) ]),
  create: z.union([ z.lazy(() => StudioCreateWithoutCreatorInputSchema),z.lazy(() => StudioUncheckedCreateWithoutCreatorInputSchema) ]),
}).strict();

export default StudioUpsertWithWhereUniqueWithoutCreatorInputSchema;
