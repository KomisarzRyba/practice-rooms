import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudioWhereInputSchema } from '../inputTypeSchemas/StudioWhereInputSchema'
import { StudioOrderByWithAggregationInputSchema } from '../inputTypeSchemas/StudioOrderByWithAggregationInputSchema'
import { StudioScalarFieldEnumSchema } from '../inputTypeSchemas/StudioScalarFieldEnumSchema'
import { StudioScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/StudioScalarWhereWithAggregatesInputSchema'

export const StudioGroupByArgsSchema: z.ZodType<Prisma.StudioGroupByArgs> = z.object({
  where: StudioWhereInputSchema.optional(),
  orderBy: z.union([ StudioOrderByWithAggregationInputSchema.array(),StudioOrderByWithAggregationInputSchema ]).optional(),
  by: StudioScalarFieldEnumSchema.array(),
  having: StudioScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default StudioGroupByArgsSchema;
