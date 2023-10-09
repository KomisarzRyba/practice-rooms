import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SchedulePropertiesCreateManyInputSchema } from '../inputTypeSchemas/SchedulePropertiesCreateManyInputSchema'

export const SchedulePropertiesCreateManyArgsSchema: z.ZodType<Prisma.SchedulePropertiesCreateManyArgs> = z.object({
  data: z.union([ SchedulePropertiesCreateManyInputSchema,SchedulePropertiesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default SchedulePropertiesCreateManyArgsSchema;
