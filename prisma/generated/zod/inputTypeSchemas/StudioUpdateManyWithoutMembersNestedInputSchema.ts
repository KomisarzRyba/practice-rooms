import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioCreateWithoutMembersInputSchema } from './StudioCreateWithoutMembersInputSchema';
import { StudioUncheckedCreateWithoutMembersInputSchema } from './StudioUncheckedCreateWithoutMembersInputSchema';
import { StudioCreateOrConnectWithoutMembersInputSchema } from './StudioCreateOrConnectWithoutMembersInputSchema';
import { StudioUpsertWithWhereUniqueWithoutMembersInputSchema } from './StudioUpsertWithWhereUniqueWithoutMembersInputSchema';
import { StudioWhereUniqueInputSchema } from './StudioWhereUniqueInputSchema';
import { StudioUpdateWithWhereUniqueWithoutMembersInputSchema } from './StudioUpdateWithWhereUniqueWithoutMembersInputSchema';
import { StudioUpdateManyWithWhereWithoutMembersInputSchema } from './StudioUpdateManyWithWhereWithoutMembersInputSchema';
import { StudioScalarWhereInputSchema } from './StudioScalarWhereInputSchema';

export const StudioUpdateManyWithoutMembersNestedInputSchema: z.ZodType<Prisma.StudioUpdateManyWithoutMembersNestedInput> = z.object({
  create: z.union([ z.lazy(() => StudioCreateWithoutMembersInputSchema),z.lazy(() => StudioCreateWithoutMembersInputSchema).array(),z.lazy(() => StudioUncheckedCreateWithoutMembersInputSchema),z.lazy(() => StudioUncheckedCreateWithoutMembersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StudioCreateOrConnectWithoutMembersInputSchema),z.lazy(() => StudioCreateOrConnectWithoutMembersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StudioUpsertWithWhereUniqueWithoutMembersInputSchema),z.lazy(() => StudioUpsertWithWhereUniqueWithoutMembersInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => StudioWhereUniqueInputSchema),z.lazy(() => StudioWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StudioWhereUniqueInputSchema),z.lazy(() => StudioWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StudioWhereUniqueInputSchema),z.lazy(() => StudioWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StudioWhereUniqueInputSchema),z.lazy(() => StudioWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StudioUpdateWithWhereUniqueWithoutMembersInputSchema),z.lazy(() => StudioUpdateWithWhereUniqueWithoutMembersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StudioUpdateManyWithWhereWithoutMembersInputSchema),z.lazy(() => StudioUpdateManyWithWhereWithoutMembersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StudioScalarWhereInputSchema),z.lazy(() => StudioScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default StudioUpdateManyWithoutMembersNestedInputSchema;
