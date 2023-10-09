import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { RoomArgsSchema } from "../outputTypeSchemas/RoomArgsSchema"

export const BookingIncludeSchema: z.ZodType<Prisma.BookingInclude> = z.object({
  owner: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  room: z.union([z.boolean(),z.lazy(() => RoomArgsSchema)]).optional(),
}).strict()

export default BookingIncludeSchema;
