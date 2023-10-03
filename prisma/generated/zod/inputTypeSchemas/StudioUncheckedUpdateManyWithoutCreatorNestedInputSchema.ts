import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioCreateWithoutCreatorInputSchema } from './StudioCreateWithoutCreatorInputSchema';
import { StudioUncheckedCreateWithoutCreatorInputSchema } from './StudioUncheckedCreateWithoutCreatorInputSchema';
import { StudioCreateOrConnectWithoutCreatorInputSchema } from './StudioCreateOrConnectWithoutCreatorInputSchema';
import { StudioUpsertWithWhereUniqueWithoutCreatorInputSchema } from './StudioUpsertWithWhereUniqueWithoutCreatorInputSchema';
import { StudioCreateManyCreatorInputEnvelopeSchema } from './StudioCreateManyCreatorInputEnvelopeSchema';
import { StudioWhereUniqueInputSchema } from './StudioWhereUniqueInputSchema';
import { StudioUpdateWithWhereUniqueWithoutCreatorInputSchema } from './StudioUpdateWithWhereUniqueWithoutCreatorInputSchema';
import { StudioUpdateManyWithWhereWithoutCreatorInputSchema } from './StudioUpdateManyWithWhereWithoutCreatorInputSchema';
import { StudioScalarWhereInputSchema } from './StudioScalarWhereInputSchema';

export const StudioUncheckedUpdateManyWithoutCreatorNestedInputSchema: z.ZodType<Prisma.StudioUncheckedUpdateManyWithoutCreatorNestedInput> = z.object({
  create: z.union([ z.lazy(() => StudioCreateWithoutCreatorInputSchema),z.lazy(() => StudioCreateWithoutCreatorInputSchema).array(),z.lazy(() => StudioUncheckedCreateWithoutCreatorInputSchema),z.lazy(() => StudioUncheckedCreateWithoutCreatorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StudioCreateOrConnectWithoutCreatorInputSchema),z.lazy(() => StudioCreateOrConnectWithoutCreatorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StudioUpsertWithWhereUniqueWithoutCreatorInputSchema),z.lazy(() => StudioUpsertWithWhereUniqueWithoutCreatorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StudioCreateManyCreatorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => StudioWhereUniqueInputSchema),z.lazy(() => StudioWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StudioWhereUniqueInputSchema),z.lazy(() => StudioWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StudioWhereUniqueInputSchema),z.lazy(() => StudioWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StudioWhereUniqueInputSchema),z.lazy(() => StudioWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StudioUpdateWithWhereUniqueWithoutCreatorInputSchema),z.lazy(() => StudioUpdateWithWhereUniqueWithoutCreatorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StudioUpdateManyWithWhereWithoutCreatorInputSchema),z.lazy(() => StudioUpdateManyWithWhereWithoutCreatorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StudioScalarWhereInputSchema),z.lazy(() => StudioScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default StudioUncheckedUpdateManyWithoutCreatorNestedInputSchema;
