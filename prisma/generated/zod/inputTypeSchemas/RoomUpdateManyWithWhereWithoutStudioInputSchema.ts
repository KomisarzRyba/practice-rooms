import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoomScalarWhereInputSchema } from './RoomScalarWhereInputSchema';
import { RoomUpdateManyMutationInputSchema } from './RoomUpdateManyMutationInputSchema';
import { RoomUncheckedUpdateManyWithoutStudioInputSchema } from './RoomUncheckedUpdateManyWithoutStudioInputSchema';

export const RoomUpdateManyWithWhereWithoutStudioInputSchema: z.ZodType<Prisma.RoomUpdateManyWithWhereWithoutStudioInput> = z.object({
  where: z.lazy(() => RoomScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoomUpdateManyMutationInputSchema),z.lazy(() => RoomUncheckedUpdateManyWithoutStudioInputSchema) ]),
}).strict();

export default RoomUpdateManyWithWhereWithoutStudioInputSchema;
