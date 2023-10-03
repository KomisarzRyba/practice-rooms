import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioWhereUniqueInputSchema } from './StudioWhereUniqueInputSchema';
import { StudioUpdateWithoutMembersInputSchema } from './StudioUpdateWithoutMembersInputSchema';
import { StudioUncheckedUpdateWithoutMembersInputSchema } from './StudioUncheckedUpdateWithoutMembersInputSchema';

export const StudioUpdateWithWhereUniqueWithoutMembersInputSchema: z.ZodType<Prisma.StudioUpdateWithWhereUniqueWithoutMembersInput> = z.object({
  where: z.lazy(() => StudioWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => StudioUpdateWithoutMembersInputSchema),z.lazy(() => StudioUncheckedUpdateWithoutMembersInputSchema) ]),
}).strict();

export default StudioUpdateWithWhereUniqueWithoutMembersInputSchema;
