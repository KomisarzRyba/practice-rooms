import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioWhereUniqueInputSchema } from './StudioWhereUniqueInputSchema';
import { StudioUpdateWithoutMembersInputSchema } from './StudioUpdateWithoutMembersInputSchema';
import { StudioUncheckedUpdateWithoutMembersInputSchema } from './StudioUncheckedUpdateWithoutMembersInputSchema';
import { StudioCreateWithoutMembersInputSchema } from './StudioCreateWithoutMembersInputSchema';
import { StudioUncheckedCreateWithoutMembersInputSchema } from './StudioUncheckedCreateWithoutMembersInputSchema';

export const StudioUpsertWithWhereUniqueWithoutMembersInputSchema: z.ZodType<Prisma.StudioUpsertWithWhereUniqueWithoutMembersInput> = z.object({
  where: z.lazy(() => StudioWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => StudioUpdateWithoutMembersInputSchema),z.lazy(() => StudioUncheckedUpdateWithoutMembersInputSchema) ]),
  create: z.union([ z.lazy(() => StudioCreateWithoutMembersInputSchema),z.lazy(() => StudioUncheckedCreateWithoutMembersInputSchema) ]),
}).strict();

export default StudioUpsertWithWhereUniqueWithoutMembersInputSchema;
