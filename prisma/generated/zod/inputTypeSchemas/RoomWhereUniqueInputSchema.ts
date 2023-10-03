import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoomWhereInputSchema } from './RoomWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StudioRelationFilterSchema } from './StudioRelationFilterSchema';
import { StudioWhereInputSchema } from './StudioWhereInputSchema';

export const RoomWhereUniqueInputSchema: z.ZodType<Prisma.RoomWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    name: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => RoomWhereInputSchema),z.lazy(() => RoomWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoomWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoomWhereInputSchema),z.lazy(() => RoomWhereInputSchema).array() ]).optional(),
  studioId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  studio: z.union([ z.lazy(() => StudioRelationFilterSchema),z.lazy(() => StudioWhereInputSchema) ]).optional(),
}).strict());

export default RoomWhereUniqueInputSchema;
