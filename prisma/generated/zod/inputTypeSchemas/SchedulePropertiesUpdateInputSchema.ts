import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { StudioUpdateOneRequiredWithoutSchedulePropertiesNestedInputSchema } from './StudioUpdateOneRequiredWithoutSchedulePropertiesNestedInputSchema';

export const SchedulePropertiesUpdateInputSchema: z.ZodType<Prisma.SchedulePropertiesUpdateInput> = z.object({
  dayStart: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  dayEnd: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  studio: z.lazy(() => StudioUpdateOneRequiredWithoutSchedulePropertiesNestedInputSchema).optional()
}).strict();

export default SchedulePropertiesUpdateInputSchema;
