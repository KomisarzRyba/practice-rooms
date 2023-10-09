import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoomWhereInputSchema } from './RoomWhereInputSchema';

export const RoomRelationFilterSchema: z.ZodType<Prisma.RoomRelationFilter> = z.object({
  is: z.lazy(() => RoomWhereInputSchema).optional(),
  isNot: z.lazy(() => RoomWhereInputSchema).optional()
}).strict();

export default RoomRelationFilterSchema;
