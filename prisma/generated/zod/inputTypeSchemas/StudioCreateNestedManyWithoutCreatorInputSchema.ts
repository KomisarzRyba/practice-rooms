import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioCreateWithoutCreatorInputSchema } from './StudioCreateWithoutCreatorInputSchema';
import { StudioUncheckedCreateWithoutCreatorInputSchema } from './StudioUncheckedCreateWithoutCreatorInputSchema';
import { StudioCreateOrConnectWithoutCreatorInputSchema } from './StudioCreateOrConnectWithoutCreatorInputSchema';
import { StudioCreateManyCreatorInputEnvelopeSchema } from './StudioCreateManyCreatorInputEnvelopeSchema';
import { StudioWhereUniqueInputSchema } from './StudioWhereUniqueInputSchema';

export const StudioCreateNestedManyWithoutCreatorInputSchema: z.ZodType<Prisma.StudioCreateNestedManyWithoutCreatorInput> = z.object({
  create: z.union([ z.lazy(() => StudioCreateWithoutCreatorInputSchema),z.lazy(() => StudioCreateWithoutCreatorInputSchema).array(),z.lazy(() => StudioUncheckedCreateWithoutCreatorInputSchema),z.lazy(() => StudioUncheckedCreateWithoutCreatorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StudioCreateOrConnectWithoutCreatorInputSchema),z.lazy(() => StudioCreateOrConnectWithoutCreatorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StudioCreateManyCreatorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StudioWhereUniqueInputSchema),z.lazy(() => StudioWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default StudioCreateNestedManyWithoutCreatorInputSchema;
