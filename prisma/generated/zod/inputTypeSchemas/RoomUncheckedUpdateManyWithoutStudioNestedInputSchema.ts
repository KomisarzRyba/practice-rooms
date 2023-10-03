import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoomCreateWithoutStudioInputSchema } from './RoomCreateWithoutStudioInputSchema';
import { RoomUncheckedCreateWithoutStudioInputSchema } from './RoomUncheckedCreateWithoutStudioInputSchema';
import { RoomCreateOrConnectWithoutStudioInputSchema } from './RoomCreateOrConnectWithoutStudioInputSchema';
import { RoomUpsertWithWhereUniqueWithoutStudioInputSchema } from './RoomUpsertWithWhereUniqueWithoutStudioInputSchema';
import { RoomCreateManyStudioInputEnvelopeSchema } from './RoomCreateManyStudioInputEnvelopeSchema';
import { RoomWhereUniqueInputSchema } from './RoomWhereUniqueInputSchema';
import { RoomUpdateWithWhereUniqueWithoutStudioInputSchema } from './RoomUpdateWithWhereUniqueWithoutStudioInputSchema';
import { RoomUpdateManyWithWhereWithoutStudioInputSchema } from './RoomUpdateManyWithWhereWithoutStudioInputSchema';
import { RoomScalarWhereInputSchema } from './RoomScalarWhereInputSchema';

export const RoomUncheckedUpdateManyWithoutStudioNestedInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateManyWithoutStudioNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutStudioInputSchema),z.lazy(() => RoomCreateWithoutStudioInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutStudioInputSchema),z.lazy(() => RoomUncheckedCreateWithoutStudioInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutStudioInputSchema),z.lazy(() => RoomCreateOrConnectWithoutStudioInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoomUpsertWithWhereUniqueWithoutStudioInputSchema),z.lazy(() => RoomUpsertWithWhereUniqueWithoutStudioInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyStudioInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoomUpdateWithWhereUniqueWithoutStudioInputSchema),z.lazy(() => RoomUpdateWithWhereUniqueWithoutStudioInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoomUpdateManyWithWhereWithoutStudioInputSchema),z.lazy(() => RoomUpdateManyWithWhereWithoutStudioInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoomScalarWhereInputSchema),z.lazy(() => RoomScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RoomUncheckedUpdateManyWithoutStudioNestedInputSchema;
