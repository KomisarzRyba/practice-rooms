import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioWhereUniqueInputSchema } from './StudioWhereUniqueInputSchema';
import { StudioCreateWithoutRoomsInputSchema } from './StudioCreateWithoutRoomsInputSchema';
import { StudioUncheckedCreateWithoutRoomsInputSchema } from './StudioUncheckedCreateWithoutRoomsInputSchema';

export const StudioCreateOrConnectWithoutRoomsInputSchema: z.ZodType<Prisma.StudioCreateOrConnectWithoutRoomsInput> = z.object({
  where: z.lazy(() => StudioWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StudioCreateWithoutRoomsInputSchema),z.lazy(() => StudioUncheckedCreateWithoutRoomsInputSchema) ]),
}).strict();

export default StudioCreateOrConnectWithoutRoomsInputSchema;
