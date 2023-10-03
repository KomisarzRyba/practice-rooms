import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { StudioOrderByWithRelationInputSchema } from './StudioOrderByWithRelationInputSchema';

export const RoomOrderByWithRelationInputSchema: z.ZodType<Prisma.RoomOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  studioId: z.lazy(() => SortOrderSchema).optional(),
  studio: z.lazy(() => StudioOrderByWithRelationInputSchema).optional()
}).strict();

export default RoomOrderByWithRelationInputSchema;
