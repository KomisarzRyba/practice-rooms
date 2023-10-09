import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioCreateNestedOneWithoutRoomsInputSchema } from './StudioCreateNestedOneWithoutRoomsInputSchema';
import { BookingCreateNestedManyWithoutRoomInputSchema } from './BookingCreateNestedManyWithoutRoomInputSchema';

export const RoomCreateInputSchema: z.ZodType<Prisma.RoomCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  studio: z.lazy(() => StudioCreateNestedOneWithoutRoomsInputSchema),
  Booking: z.lazy(() => BookingCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export default RoomCreateInputSchema;
