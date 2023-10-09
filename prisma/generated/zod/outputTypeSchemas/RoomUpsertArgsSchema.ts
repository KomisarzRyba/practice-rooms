import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoomIncludeSchema } from '../inputTypeSchemas/RoomIncludeSchema'
import { RoomWhereUniqueInputSchema } from '../inputTypeSchemas/RoomWhereUniqueInputSchema'
import { RoomCreateInputSchema } from '../inputTypeSchemas/RoomCreateInputSchema'
import { RoomUncheckedCreateInputSchema } from '../inputTypeSchemas/RoomUncheckedCreateInputSchema'
import { RoomUpdateInputSchema } from '../inputTypeSchemas/RoomUpdateInputSchema'
import { RoomUncheckedUpdateInputSchema } from '../inputTypeSchemas/RoomUncheckedUpdateInputSchema'
import { StudioArgsSchema } from "../outputTypeSchemas/StudioArgsSchema"
import { BookingFindManyArgsSchema } from "../outputTypeSchemas/BookingFindManyArgsSchema"
import { RoomCountOutputTypeArgsSchema } from "../outputTypeSchemas/RoomCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RoomSelectSchema: z.ZodType<Prisma.RoomSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  studioId: z.boolean().optional(),
  studio: z.union([z.boolean(),z.lazy(() => StudioArgsSchema)]).optional(),
  Booking: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoomCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RoomUpsertArgsSchema: z.ZodType<Prisma.RoomUpsertArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereUniqueInputSchema,
  create: z.union([ RoomCreateInputSchema,RoomUncheckedCreateInputSchema ]),
  update: z.union([ RoomUpdateInputSchema,RoomUncheckedUpdateInputSchema ]),
}).strict()

export default RoomUpsertArgsSchema;
