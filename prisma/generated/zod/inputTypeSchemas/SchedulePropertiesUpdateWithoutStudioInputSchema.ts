import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const SchedulePropertiesUpdateWithoutStudioInputSchema: z.ZodType<Prisma.SchedulePropertiesUpdateWithoutStudioInput> = z.object({
  dayStart: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  dayEnd: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default SchedulePropertiesUpdateWithoutStudioInputSchema;
