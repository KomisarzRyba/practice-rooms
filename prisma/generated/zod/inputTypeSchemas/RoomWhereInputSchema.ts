import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StudioRelationFilterSchema } from './StudioRelationFilterSchema';
import { StudioWhereInputSchema } from './StudioWhereInputSchema';
import { BookingListRelationFilterSchema } from './BookingListRelationFilterSchema';

export const RoomWhereInputSchema: z.ZodType<Prisma.RoomWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoomWhereInputSchema),z.lazy(() => RoomWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoomWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoomWhereInputSchema),z.lazy(() => RoomWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  studioId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  studio: z.union([ z.lazy(() => StudioRelationFilterSchema),z.lazy(() => StudioWhereInputSchema) ]).optional(),
  Booking: z.lazy(() => BookingListRelationFilterSchema).optional()
}).strict();

export default RoomWhereInputSchema;
