import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudioIncludeSchema } from '../inputTypeSchemas/StudioIncludeSchema'
import { StudioUpdateInputSchema } from '../inputTypeSchemas/StudioUpdateInputSchema'
import { StudioUncheckedUpdateInputSchema } from '../inputTypeSchemas/StudioUncheckedUpdateInputSchema'
import { StudioWhereUniqueInputSchema } from '../inputTypeSchemas/StudioWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { UserFindManyArgsSchema } from "../outputTypeSchemas/UserFindManyArgsSchema"
import { RoomFindManyArgsSchema } from "../outputTypeSchemas/RoomFindManyArgsSchema"
import { StudioCountOutputTypeArgsSchema } from "../outputTypeSchemas/StudioCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StudioSelectSchema: z.ZodType<Prisma.StudioSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  creatorId: z.boolean().optional(),
  invitedUserEmails: z.boolean().optional(),
  creator: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  members: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  rooms: z.union([z.boolean(),z.lazy(() => RoomFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => StudioCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const StudioUpdateArgsSchema: z.ZodType<Prisma.StudioUpdateArgs> = z.object({
  select: StudioSelectSchema.optional(),
  include: StudioIncludeSchema.optional(),
  data: z.union([ StudioUpdateInputSchema,StudioUncheckedUpdateInputSchema ]),
  where: StudioWhereUniqueInputSchema,
}).strict()

export default StudioUpdateArgsSchema;
