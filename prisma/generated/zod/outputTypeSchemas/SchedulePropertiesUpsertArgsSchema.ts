import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SchedulePropertiesIncludeSchema } from '../inputTypeSchemas/SchedulePropertiesIncludeSchema'
import { SchedulePropertiesWhereUniqueInputSchema } from '../inputTypeSchemas/SchedulePropertiesWhereUniqueInputSchema'
import { SchedulePropertiesCreateInputSchema } from '../inputTypeSchemas/SchedulePropertiesCreateInputSchema'
import { SchedulePropertiesUncheckedCreateInputSchema } from '../inputTypeSchemas/SchedulePropertiesUncheckedCreateInputSchema'
import { SchedulePropertiesUpdateInputSchema } from '../inputTypeSchemas/SchedulePropertiesUpdateInputSchema'
import { SchedulePropertiesUncheckedUpdateInputSchema } from '../inputTypeSchemas/SchedulePropertiesUncheckedUpdateInputSchema'
import { StudioArgsSchema } from "../outputTypeSchemas/StudioArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SchedulePropertiesSelectSchema: z.ZodType<Prisma.SchedulePropertiesSelect> = z.object({
  studioId: z.boolean().optional(),
  dayStart: z.boolean().optional(),
  dayEnd: z.boolean().optional(),
  studio: z.union([z.boolean(),z.lazy(() => StudioArgsSchema)]).optional(),
}).strict()

export const SchedulePropertiesUpsertArgsSchema: z.ZodType<Prisma.SchedulePropertiesUpsertArgs> = z.object({
  select: SchedulePropertiesSelectSchema.optional(),
  include: SchedulePropertiesIncludeSchema.optional(),
  where: SchedulePropertiesWhereUniqueInputSchema,
  create: z.union([ SchedulePropertiesCreateInputSchema,SchedulePropertiesUncheckedCreateInputSchema ]),
  update: z.union([ SchedulePropertiesUpdateInputSchema,SchedulePropertiesUncheckedUpdateInputSchema ]),
}).strict()

export default SchedulePropertiesUpsertArgsSchema;
