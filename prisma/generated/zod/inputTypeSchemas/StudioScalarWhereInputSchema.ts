import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';

export const StudioScalarWhereInputSchema: z.ZodType<Prisma.StudioScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StudioScalarWhereInputSchema),z.lazy(() => StudioScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudioScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudioScalarWhereInputSchema),z.lazy(() => StudioScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  creatorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  invitedUserEmails: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export default StudioScalarWhereInputSchema;
