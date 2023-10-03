import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioWhereUniqueInputSchema } from './StudioWhereUniqueInputSchema';
import { StudioUpdateWithoutCreatorInputSchema } from './StudioUpdateWithoutCreatorInputSchema';
import { StudioUncheckedUpdateWithoutCreatorInputSchema } from './StudioUncheckedUpdateWithoutCreatorInputSchema';

export const StudioUpdateWithWhereUniqueWithoutCreatorInputSchema: z.ZodType<Prisma.StudioUpdateWithWhereUniqueWithoutCreatorInput> = z.object({
  where: z.lazy(() => StudioWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => StudioUpdateWithoutCreatorInputSchema),z.lazy(() => StudioUncheckedUpdateWithoutCreatorInputSchema) ]),
}).strict();

export default StudioUpdateWithWhereUniqueWithoutCreatorInputSchema;
