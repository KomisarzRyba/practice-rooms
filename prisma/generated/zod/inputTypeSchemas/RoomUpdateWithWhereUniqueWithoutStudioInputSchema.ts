import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoomWhereUniqueInputSchema } from './RoomWhereUniqueInputSchema';
import { RoomUpdateWithoutStudioInputSchema } from './RoomUpdateWithoutStudioInputSchema';
import { RoomUncheckedUpdateWithoutStudioInputSchema } from './RoomUncheckedUpdateWithoutStudioInputSchema';

export const RoomUpdateWithWhereUniqueWithoutStudioInputSchema: z.ZodType<Prisma.RoomUpdateWithWhereUniqueWithoutStudioInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoomUpdateWithoutStudioInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutStudioInputSchema) ]),
}).strict();

export default RoomUpdateWithWhereUniqueWithoutStudioInputSchema;
