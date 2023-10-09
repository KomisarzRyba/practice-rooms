import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BookingUncheckedCreateNestedManyWithoutRoomInputSchema } from './BookingUncheckedCreateNestedManyWithoutRoomInputSchema';

export const RoomUncheckedCreateWithoutStudioInputSchema: z.ZodType<Prisma.RoomUncheckedCreateWithoutStudioInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  Booking: z.lazy(() => BookingUncheckedCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export default RoomUncheckedCreateWithoutStudioInputSchema;
