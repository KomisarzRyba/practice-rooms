import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioUpdateWithoutRoomsInputSchema } from './StudioUpdateWithoutRoomsInputSchema';
import { StudioUncheckedUpdateWithoutRoomsInputSchema } from './StudioUncheckedUpdateWithoutRoomsInputSchema';
import { StudioCreateWithoutRoomsInputSchema } from './StudioCreateWithoutRoomsInputSchema';
import { StudioUncheckedCreateWithoutRoomsInputSchema } from './StudioUncheckedCreateWithoutRoomsInputSchema';
import { StudioWhereInputSchema } from './StudioWhereInputSchema';

export const StudioUpsertWithoutRoomsInputSchema: z.ZodType<Prisma.StudioUpsertWithoutRoomsInput> = z.object({
  update: z.union([ z.lazy(() => StudioUpdateWithoutRoomsInputSchema),z.lazy(() => StudioUncheckedUpdateWithoutRoomsInputSchema) ]),
  create: z.union([ z.lazy(() => StudioCreateWithoutRoomsInputSchema),z.lazy(() => StudioUncheckedCreateWithoutRoomsInputSchema) ]),
  where: z.lazy(() => StudioWhereInputSchema).optional()
}).strict();

export default StudioUpsertWithoutRoomsInputSchema;
