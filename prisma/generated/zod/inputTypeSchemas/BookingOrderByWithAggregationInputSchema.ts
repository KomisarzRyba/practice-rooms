import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BookingCountOrderByAggregateInputSchema } from './BookingCountOrderByAggregateInputSchema';
import { BookingAvgOrderByAggregateInputSchema } from './BookingAvgOrderByAggregateInputSchema';
import { BookingMaxOrderByAggregateInputSchema } from './BookingMaxOrderByAggregateInputSchema';
import { BookingMinOrderByAggregateInputSchema } from './BookingMinOrderByAggregateInputSchema';
import { BookingSumOrderByAggregateInputSchema } from './BookingSumOrderByAggregateInputSchema';

export const BookingOrderByWithAggregationInputSchema: z.ZodType<Prisma.BookingOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  roomId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BookingCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BookingAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BookingMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BookingMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BookingSumOrderByAggregateInputSchema).optional()
}).strict();

export default BookingOrderByWithAggregationInputSchema;
