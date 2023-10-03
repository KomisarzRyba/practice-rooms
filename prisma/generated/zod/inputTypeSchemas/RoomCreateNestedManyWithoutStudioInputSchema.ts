import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoomCreateWithoutStudioInputSchema } from './RoomCreateWithoutStudioInputSchema';
import { RoomUncheckedCreateWithoutStudioInputSchema } from './RoomUncheckedCreateWithoutStudioInputSchema';
import { RoomCreateOrConnectWithoutStudioInputSchema } from './RoomCreateOrConnectWithoutStudioInputSchema';
import { RoomCreateManyStudioInputEnvelopeSchema } from './RoomCreateManyStudioInputEnvelopeSchema';
import { RoomWhereUniqueInputSchema } from './RoomWhereUniqueInputSchema';

export const RoomCreateNestedManyWithoutStudioInputSchema: z.ZodType<Prisma.RoomCreateNestedManyWithoutStudioInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutStudioInputSchema),z.lazy(() => RoomCreateWithoutStudioInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutStudioInputSchema),z.lazy(() => RoomUncheckedCreateWithoutStudioInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutStudioInputSchema),z.lazy(() => RoomCreateOrConnectWithoutStudioInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyStudioInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RoomCreateNestedManyWithoutStudioInputSchema;
