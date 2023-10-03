import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudioWhereInputSchema } from '../inputTypeSchemas/StudioWhereInputSchema'
import { StudioOrderByWithRelationInputSchema } from '../inputTypeSchemas/StudioOrderByWithRelationInputSchema'
import { StudioWhereUniqueInputSchema } from '../inputTypeSchemas/StudioWhereUniqueInputSchema'

export const StudioAggregateArgsSchema: z.ZodType<Prisma.StudioAggregateArgs> = z.object({
  where: StudioWhereInputSchema.optional(),
  orderBy: z.union([ StudioOrderByWithRelationInputSchema.array(),StudioOrderByWithRelationInputSchema ]).optional(),
  cursor: StudioWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default StudioAggregateArgsSchema;
