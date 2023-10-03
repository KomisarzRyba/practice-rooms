import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoomWhereUniqueInputSchema } from './RoomWhereUniqueInputSchema';
import { RoomCreateWithoutStudioInputSchema } from './RoomCreateWithoutStudioInputSchema';
import { RoomUncheckedCreateWithoutStudioInputSchema } from './RoomUncheckedCreateWithoutStudioInputSchema';

export const RoomCreateOrConnectWithoutStudioInputSchema: z.ZodType<Prisma.RoomCreateOrConnectWithoutStudioInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoomCreateWithoutStudioInputSchema),z.lazy(() => RoomUncheckedCreateWithoutStudioInputSchema) ]),
}).strict();

export default RoomCreateOrConnectWithoutStudioInputSchema;
