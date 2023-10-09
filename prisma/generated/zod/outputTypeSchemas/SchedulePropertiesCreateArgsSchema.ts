import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SchedulePropertiesIncludeSchema } from '../inputTypeSchemas/SchedulePropertiesIncludeSchema'
import { SchedulePropertiesCreateInputSchema } from '../inputTypeSchemas/SchedulePropertiesCreateInputSchema'
import { SchedulePropertiesUncheckedCreateInputSchema } from '../inputTypeSchemas/SchedulePropertiesUncheckedCreateInputSchema'
import { StudioArgsSchema } from "../outputTypeSchemas/StudioArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SchedulePropertiesSelectSchema: z.ZodType<Prisma.SchedulePropertiesSelect> = z.object({
  studioId: z.boolean().optional(),
  dayStart: z.boolean().optional(),
  dayEnd: z.boolean().optional(),
  studio: z.union([z.boolean(),z.lazy(() => StudioArgsSchema)]).optional(),
}).strict()

export const SchedulePropertiesCreateArgsSchema: z.ZodType<Prisma.SchedulePropertiesCreateArgs> = z.object({
  select: SchedulePropertiesSelectSchema.optional(),
  include: SchedulePropertiesIncludeSchema.optional(),
  data: z.union([ SchedulePropertiesCreateInputSchema,SchedulePropertiesUncheckedCreateInputSchema ]),
}).strict()

export default SchedulePropertiesCreateArgsSchema;
