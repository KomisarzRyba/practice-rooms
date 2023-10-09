import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SchedulePropertiesWhereInputSchema } from '../inputTypeSchemas/SchedulePropertiesWhereInputSchema'
import { SchedulePropertiesOrderByWithRelationInputSchema } from '../inputTypeSchemas/SchedulePropertiesOrderByWithRelationInputSchema'
import { SchedulePropertiesWhereUniqueInputSchema } from '../inputTypeSchemas/SchedulePropertiesWhereUniqueInputSchema'

export const SchedulePropertiesAggregateArgsSchema: z.ZodType<Prisma.SchedulePropertiesAggregateArgs> = z.object({
  where: SchedulePropertiesWhereInputSchema.optional(),
  orderBy: z.union([ SchedulePropertiesOrderByWithRelationInputSchema.array(),SchedulePropertiesOrderByWithRelationInputSchema ]).optional(),
  cursor: SchedulePropertiesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default SchedulePropertiesAggregateArgsSchema;
