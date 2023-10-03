import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioScalarWhereInputSchema } from './StudioScalarWhereInputSchema';
import { StudioUpdateManyMutationInputSchema } from './StudioUpdateManyMutationInputSchema';
import { StudioUncheckedUpdateManyWithoutCreatorInputSchema } from './StudioUncheckedUpdateManyWithoutCreatorInputSchema';

export const StudioUpdateManyWithWhereWithoutCreatorInputSchema: z.ZodType<Prisma.StudioUpdateManyWithWhereWithoutCreatorInput> = z.object({
  where: z.lazy(() => StudioScalarWhereInputSchema),
  data: z.union([ z.lazy(() => StudioUpdateManyMutationInputSchema),z.lazy(() => StudioUncheckedUpdateManyWithoutCreatorInputSchema) ]),
}).strict();

export default StudioUpdateManyWithWhereWithoutCreatorInputSchema;
