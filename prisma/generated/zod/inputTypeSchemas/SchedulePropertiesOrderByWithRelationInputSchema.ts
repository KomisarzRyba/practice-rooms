import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { StudioOrderByWithRelationInputSchema } from './StudioOrderByWithRelationInputSchema';

export const SchedulePropertiesOrderByWithRelationInputSchema: z.ZodType<Prisma.SchedulePropertiesOrderByWithRelationInput> = z.object({
  studioId: z.lazy(() => SortOrderSchema).optional(),
  dayStart: z.lazy(() => SortOrderSchema).optional(),
  dayEnd: z.lazy(() => SortOrderSchema).optional(),
  studio: z.lazy(() => StudioOrderByWithRelationInputSchema).optional()
}).strict();

export default SchedulePropertiesOrderByWithRelationInputSchema;
