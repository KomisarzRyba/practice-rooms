import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoomIncludeSchema } from '../inputTypeSchemas/RoomIncludeSchema'
import { RoomCreateInputSchema } from '../inputTypeSchemas/RoomCreateInputSchema'
import { RoomUncheckedCreateInputSchema } from '../inputTypeSchemas/RoomUncheckedCreateInputSchema'
import { StudioArgsSchema } from "../outputTypeSchemas/StudioArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RoomSelectSchema: z.ZodType<Prisma.RoomSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  studioId: z.boolean().optional(),
  studio: z.union([z.boolean(),z.lazy(() => StudioArgsSchema)]).optional(),
}).strict()

export const RoomCreateArgsSchema: z.ZodType<Prisma.RoomCreateArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  data: z.union([ RoomCreateInputSchema,RoomUncheckedCreateInputSchema ]),
}).strict()

export default RoomCreateArgsSchema;
