import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioScalarWhereInputSchema } from './StudioScalarWhereInputSchema';
import { StudioUpdateManyMutationInputSchema } from './StudioUpdateManyMutationInputSchema';
import { StudioUncheckedUpdateManyWithoutMembersInputSchema } from './StudioUncheckedUpdateManyWithoutMembersInputSchema';

export const StudioUpdateManyWithWhereWithoutMembersInputSchema: z.ZodType<Prisma.StudioUpdateManyWithWhereWithoutMembersInput> = z.object({
  where: z.lazy(() => StudioScalarWhereInputSchema),
  data: z.union([ z.lazy(() => StudioUpdateManyMutationInputSchema),z.lazy(() => StudioUncheckedUpdateManyWithoutMembersInputSchema) ]),
}).strict();

export default StudioUpdateManyWithWhereWithoutMembersInputSchema;
