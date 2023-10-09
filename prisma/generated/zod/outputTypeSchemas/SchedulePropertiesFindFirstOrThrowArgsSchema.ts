import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SchedulePropertiesIncludeSchema } from '../inputTypeSchemas/SchedulePropertiesIncludeSchema'
import { SchedulePropertiesWhereInputSchema } from '../inputTypeSchemas/SchedulePropertiesWhereInputSchema'
import { SchedulePropertiesOrderByWithRelationInputSchema } from '../inputTypeSchemas/SchedulePropertiesOrderByWithRelationInputSchema'
import { SchedulePropertiesWhereUniqueInputSchema } from '../inputTypeSchemas/SchedulePropertiesWhereUniqueInputSchema'
import { SchedulePropertiesScalarFieldEnumSchema } from '../inputTypeSchemas/SchedulePropertiesScalarFieldEnumSchema'
import { StudioArgsSchema } from "../outputTypeSchemas/StudioArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SchedulePropertiesSelectSchema: z.ZodType<Prisma.SchedulePropertiesSelect> = z.object({
  studioId: z.boolean().optional(),
  dayStart: z.boolean().optional(),
  dayEnd: z.boolean().optional(),
  studio: z.union([z.boolean(),z.lazy(() => StudioArgsSchema)]).optional(),
}).strict()

export const SchedulePropertiesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SchedulePropertiesFindFirstOrThrowArgs> = z.object({
  select: SchedulePropertiesSelectSchema.optional(),
  include: SchedulePropertiesIncludeSchema.optional(),
  where: SchedulePropertiesWhereInputSchema.optional(),
  orderBy: z.union([ SchedulePropertiesOrderByWithRelationInputSchema.array(),SchedulePropertiesOrderByWithRelationInputSchema ]).optional(),
  cursor: SchedulePropertiesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SchedulePropertiesScalarFieldEnumSchema,SchedulePropertiesScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default SchedulePropertiesFindFirstOrThrowArgsSchema;
