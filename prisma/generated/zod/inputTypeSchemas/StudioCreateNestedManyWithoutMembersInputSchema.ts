import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioCreateWithoutMembersInputSchema } from './StudioCreateWithoutMembersInputSchema';
import { StudioUncheckedCreateWithoutMembersInputSchema } from './StudioUncheckedCreateWithoutMembersInputSchema';
import { StudioCreateOrConnectWithoutMembersInputSchema } from './StudioCreateOrConnectWithoutMembersInputSchema';
import { StudioWhereUniqueInputSchema } from './StudioWhereUniqueInputSchema';

export const StudioCreateNestedManyWithoutMembersInputSchema: z.ZodType<Prisma.StudioCreateNestedManyWithoutMembersInput> = z.object({
  create: z.union([ z.lazy(() => StudioCreateWithoutMembersInputSchema),z.lazy(() => StudioCreateWithoutMembersInputSchema).array(),z.lazy(() => StudioUncheckedCreateWithoutMembersInputSchema),z.lazy(() => StudioUncheckedCreateWithoutMembersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StudioCreateOrConnectWithoutMembersInputSchema),z.lazy(() => StudioCreateOrConnectWithoutMembersInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StudioWhereUniqueInputSchema),z.lazy(() => StudioWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default StudioCreateNestedManyWithoutMembersInputSchema;
