import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const StudioCountOrderByAggregateInputSchema: z.ZodType<Prisma.StudioCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.lazy(() => SortOrderSchema).optional(),
  invitedUserEmails: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default StudioCountOrderByAggregateInputSchema;
