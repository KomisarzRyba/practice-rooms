import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SchedulePropertiesWhereInputSchema } from '../inputTypeSchemas/SchedulePropertiesWhereInputSchema'
import { SchedulePropertiesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SchedulePropertiesOrderByWithAggregationInputSchema'
import { SchedulePropertiesScalarFieldEnumSchema } from '../inputTypeSchemas/SchedulePropertiesScalarFieldEnumSchema'
import { SchedulePropertiesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SchedulePropertiesScalarWhereWithAggregatesInputSchema'

export const SchedulePropertiesGroupByArgsSchema: z.ZodType<Prisma.SchedulePropertiesGroupByArgs> = z.object({
  where: SchedulePropertiesWhereInputSchema.optional(),
  orderBy: z.union([ SchedulePropertiesOrderByWithAggregationInputSchema.array(),SchedulePropertiesOrderByWithAggregationInputSchema ]).optional(),
  by: SchedulePropertiesScalarFieldEnumSchema.array(),
  having: SchedulePropertiesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default SchedulePropertiesGroupByArgsSchema;
