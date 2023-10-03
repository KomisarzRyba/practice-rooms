import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioCreateWithoutRoomsInputSchema } from './StudioCreateWithoutRoomsInputSchema';
import { StudioUncheckedCreateWithoutRoomsInputSchema } from './StudioUncheckedCreateWithoutRoomsInputSchema';
import { StudioCreateOrConnectWithoutRoomsInputSchema } from './StudioCreateOrConnectWithoutRoomsInputSchema';
import { StudioWhereUniqueInputSchema } from './StudioWhereUniqueInputSchema';

export const StudioCreateNestedOneWithoutRoomsInputSchema: z.ZodType<Prisma.StudioCreateNestedOneWithoutRoomsInput> = z.object({
  create: z.union([ z.lazy(() => StudioCreateWithoutRoomsInputSchema),z.lazy(() => StudioUncheckedCreateWithoutRoomsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StudioCreateOrConnectWithoutRoomsInputSchema).optional(),
  connect: z.lazy(() => StudioWhereUniqueInputSchema).optional()
}).strict();

export default StudioCreateNestedOneWithoutRoomsInputSchema;
