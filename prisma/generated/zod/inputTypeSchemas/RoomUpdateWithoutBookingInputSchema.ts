import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { StudioUpdateOneRequiredWithoutRoomsNestedInputSchema } from './StudioUpdateOneRequiredWithoutRoomsNestedInputSchema';

export const RoomUpdateWithoutBookingInputSchema: z.ZodType<Prisma.RoomUpdateWithoutBookingInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  studio: z.lazy(() => StudioUpdateOneRequiredWithoutRoomsNestedInputSchema).optional()
}).strict();

export default RoomUpdateWithoutBookingInputSchema;
