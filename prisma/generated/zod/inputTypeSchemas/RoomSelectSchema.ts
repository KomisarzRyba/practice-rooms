import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudioArgsSchema } from "../outputTypeSchemas/StudioArgsSchema"
import { BookingFindManyArgsSchema } from "../outputTypeSchemas/BookingFindManyArgsSchema"
import { RoomCountOutputTypeArgsSchema } from "../outputTypeSchemas/RoomCountOutputTypeArgsSchema"

export const RoomSelectSchema: z.ZodType<Prisma.RoomSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  studioId: z.boolean().optional(),
  studio: z.union([z.boolean(),z.lazy(() => StudioArgsSchema)]).optional(),
  Booking: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoomCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default RoomSelectSchema;
