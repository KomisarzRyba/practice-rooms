import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BookingCreateNestedManyWithoutRoomInputSchema } from './BookingCreateNestedManyWithoutRoomInputSchema';

export const RoomCreateWithoutStudioInputSchema: z.ZodType<Prisma.RoomCreateWithoutStudioInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  Booking: z.lazy(() => BookingCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export default RoomCreateWithoutStudioInputSchema;
