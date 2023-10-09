import { z } from 'zod';

/////////////////////////////////////////
// BOOKING SCHEMA
/////////////////////////////////////////

export const BookingSchema = z.object({
  id: z.number().int(),
  ownerId: z.string(),
  roomId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
})

export type Booking = z.infer<typeof BookingSchema>

export default BookingSchema;
