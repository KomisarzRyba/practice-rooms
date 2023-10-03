import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioCreateWithoutRoomsInputSchema } from './StudioCreateWithoutRoomsInputSchema';
import { StudioUncheckedCreateWithoutRoomsInputSchema } from './StudioUncheckedCreateWithoutRoomsInputSchema';
import { StudioCreateOrConnectWithoutRoomsInputSchema } from './StudioCreateOrConnectWithoutRoomsInputSchema';
import { StudioUpsertWithoutRoomsInputSchema } from './StudioUpsertWithoutRoomsInputSchema';
import { StudioWhereUniqueInputSchema } from './StudioWhereUniqueInputSchema';
import { StudioUpdateToOneWithWhereWithoutRoomsInputSchema } from './StudioUpdateToOneWithWhereWithoutRoomsInputSchema';
import { StudioUpdateWithoutRoomsInputSchema } from './StudioUpdateWithoutRoomsInputSchema';
import { StudioUncheckedUpdateWithoutRoomsInputSchema } from './StudioUncheckedUpdateWithoutRoomsInputSchema';

export const StudioUpdateOneRequiredWithoutRoomsNestedInputSchema: z.ZodType<Prisma.StudioUpdateOneRequiredWithoutRoomsNestedInput> = z.object({
  create: z.union([ z.lazy(() => StudioCreateWithoutRoomsInputSchema),z.lazy(() => StudioUncheckedCreateWithoutRoomsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StudioCreateOrConnectWithoutRoomsInputSchema).optional(),
  upsert: z.lazy(() => StudioUpsertWithoutRoomsInputSchema).optional(),
  connect: z.lazy(() => StudioWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StudioUpdateToOneWithWhereWithoutRoomsInputSchema),z.lazy(() => StudioUpdateWithoutRoomsInputSchema),z.lazy(() => StudioUncheckedUpdateWithoutRoomsInputSchema) ]).optional(),
}).strict();

export default StudioUpdateOneRequiredWithoutRoomsNestedInputSchema;
