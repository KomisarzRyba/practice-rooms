import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BookingUncheckedCreateNestedManyWithoutRoomInputSchema } from './BookingUncheckedCreateNestedManyWithoutRoomInputSchema';

export const RoomUncheckedCreateInputSchema: z.ZodType<Prisma.RoomUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  studioId: z.string(),
  Booking: z.lazy(() => BookingUncheckedCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export default RoomUncheckedCreateInputSchema;
