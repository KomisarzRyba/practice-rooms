import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioWhereUniqueInputSchema } from './StudioWhereUniqueInputSchema';
import { StudioCreateWithoutMembersInputSchema } from './StudioCreateWithoutMembersInputSchema';
import { StudioUncheckedCreateWithoutMembersInputSchema } from './StudioUncheckedCreateWithoutMembersInputSchema';

export const StudioCreateOrConnectWithoutMembersInputSchema: z.ZodType<Prisma.StudioCreateOrConnectWithoutMembersInput> = z.object({
  where: z.lazy(() => StudioWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StudioCreateWithoutMembersInputSchema),z.lazy(() => StudioUncheckedCreateWithoutMembersInputSchema) ]),
}).strict();

export default StudioCreateOrConnectWithoutMembersInputSchema;
