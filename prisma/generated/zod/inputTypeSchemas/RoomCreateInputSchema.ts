import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioCreateNestedOneWithoutRoomsInputSchema } from './StudioCreateNestedOneWithoutRoomsInputSchema';

export const RoomCreateInputSchema: z.ZodType<Prisma.RoomCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  studio: z.lazy(() => StudioCreateNestedOneWithoutRoomsInputSchema)
}).strict();

export default RoomCreateInputSchema;
