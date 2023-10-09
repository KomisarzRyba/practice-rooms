import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SchedulePropertiesWhereInputSchema } from '../inputTypeSchemas/SchedulePropertiesWhereInputSchema'

export const SchedulePropertiesDeleteManyArgsSchema: z.ZodType<Prisma.SchedulePropertiesDeleteManyArgs> = z.object({
  where: SchedulePropertiesWhereInputSchema.optional(),
}).strict()

export default SchedulePropertiesDeleteManyArgsSchema;
