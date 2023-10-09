import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SchedulePropertiesUpdateManyMutationInputSchema } from '../inputTypeSchemas/SchedulePropertiesUpdateManyMutationInputSchema'
import { SchedulePropertiesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SchedulePropertiesUncheckedUpdateManyInputSchema'
import { SchedulePropertiesWhereInputSchema } from '../inputTypeSchemas/SchedulePropertiesWhereInputSchema'

export const SchedulePropertiesUpdateManyArgsSchema: z.ZodType<Prisma.SchedulePropertiesUpdateManyArgs> = z.object({
  data: z.union([ SchedulePropertiesUpdateManyMutationInputSchema,SchedulePropertiesUncheckedUpdateManyInputSchema ]),
  where: SchedulePropertiesWhereInputSchema.optional(),
}).strict()

export default SchedulePropertiesUpdateManyArgsSchema;
