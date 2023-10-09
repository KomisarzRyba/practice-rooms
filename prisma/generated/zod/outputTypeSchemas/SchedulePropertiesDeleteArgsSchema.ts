import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SchedulePropertiesIncludeSchema } from '../inputTypeSchemas/SchedulePropertiesIncludeSchema'
import { SchedulePropertiesWhereUniqueInputSchema } from '../inputTypeSchemas/SchedulePropertiesWhereUniqueInputSchema'
import { StudioArgsSchema } from "../outputTypeSchemas/StudioArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SchedulePropertiesSelectSchema: z.ZodType<Prisma.SchedulePropertiesSelect> = z.object({
  studioId: z.boolean().optional(),
  dayStart: z.boolean().optional(),
  dayEnd: z.boolean().optional(),
  studio: z.union([z.boolean(),z.lazy(() => StudioArgsSchema)]).optional(),
}).strict()

export const SchedulePropertiesDeleteArgsSchema: z.ZodType<Prisma.SchedulePropertiesDeleteArgs> = z.object({
  select: SchedulePropertiesSelectSchema.optional(),
  include: SchedulePropertiesIncludeSchema.optional(),
  where: SchedulePropertiesWhereUniqueInputSchema,
}).strict()

export default SchedulePropertiesDeleteArgsSchema;
