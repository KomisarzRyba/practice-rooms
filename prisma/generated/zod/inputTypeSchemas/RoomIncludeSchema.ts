import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudioArgsSchema } from "../outputTypeSchemas/StudioArgsSchema"
import { BookingFindManyArgsSchema } from "../outputTypeSchemas/BookingFindManyArgsSchema"
import { RoomCountOutputTypeArgsSchema } from "../outputTypeSchemas/RoomCountOutputTypeArgsSchema"

export const RoomIncludeSchema: z.ZodType<Prisma.RoomInclude> = z.object({
  studio: z.union([z.boolean(),z.lazy(() => StudioArgsSchema)]).optional(),
  Booking: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoomCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default RoomIncludeSchema;
