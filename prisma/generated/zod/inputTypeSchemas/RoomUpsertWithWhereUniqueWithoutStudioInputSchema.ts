import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoomWhereUniqueInputSchema } from './RoomWhereUniqueInputSchema';
import { RoomUpdateWithoutStudioInputSchema } from './RoomUpdateWithoutStudioInputSchema';
import { RoomUncheckedUpdateWithoutStudioInputSchema } from './RoomUncheckedUpdateWithoutStudioInputSchema';
import { RoomCreateWithoutStudioInputSchema } from './RoomCreateWithoutStudioInputSchema';
import { RoomUncheckedCreateWithoutStudioInputSchema } from './RoomUncheckedCreateWithoutStudioInputSchema';

export const RoomUpsertWithWhereUniqueWithoutStudioInputSchema: z.ZodType<Prisma.RoomUpsertWithWhereUniqueWithoutStudioInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoomUpdateWithoutStudioInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutStudioInputSchema) ]),
  create: z.union([ z.lazy(() => RoomCreateWithoutStudioInputSchema),z.lazy(() => RoomUncheckedCreateWithoutStudioInputSchema) ]),
}).strict();

export default RoomUpsertWithWhereUniqueWithoutStudioInputSchema;
