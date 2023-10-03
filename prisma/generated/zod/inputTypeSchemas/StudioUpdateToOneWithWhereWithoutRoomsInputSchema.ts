import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioWhereInputSchema } from './StudioWhereInputSchema';
import { StudioUpdateWithoutRoomsInputSchema } from './StudioUpdateWithoutRoomsInputSchema';
import { StudioUncheckedUpdateWithoutRoomsInputSchema } from './StudioUncheckedUpdateWithoutRoomsInputSchema';

export const StudioUpdateToOneWithWhereWithoutRoomsInputSchema: z.ZodType<Prisma.StudioUpdateToOneWithWhereWithoutRoomsInput> = z.object({
  where: z.lazy(() => StudioWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StudioUpdateWithoutRoomsInputSchema),z.lazy(() => StudioUncheckedUpdateWithoutRoomsInputSchema) ]),
}).strict();

export default StudioUpdateToOneWithWhereWithoutRoomsInputSchema;
