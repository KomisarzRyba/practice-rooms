import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudioIncludeSchema } from '../inputTypeSchemas/StudioIncludeSchema'
import { StudioWhereInputSchema } from '../inputTypeSchemas/StudioWhereInputSchema'
import { StudioOrderByWithRelationInputSchema } from '../inputTypeSchemas/StudioOrderByWithRelationInputSchema'
import { StudioWhereUniqueInputSchema } from '../inputTypeSchemas/StudioWhereUniqueInputSchema'
import { StudioScalarFieldEnumSchema } from '../inputTypeSchemas/StudioScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { UserFindManyArgsSchema } from "../outputTypeSchemas/UserFindManyArgsSchema"
import { RoomFindManyArgsSchema } from "../outputTypeSchemas/RoomFindManyArgsSchema"
import { SchedulePropertiesArgsSchema } from "../outputTypeSchemas/SchedulePropertiesArgsSchema"
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
  scheduleProperties: z.union([z.boolean(),z.lazy(() => SchedulePropertiesArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => StudioCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const StudioFindManyArgsSchema: z.ZodType<Prisma.StudioFindManyArgs> = z.object({
  select: StudioSelectSchema.optional(),
  include: StudioIncludeSchema.optional(),
  where: StudioWhereInputSchema.optional(),
  orderBy: z.union([ StudioOrderByWithRelationInputSchema.array(),StudioOrderByWithRelationInputSchema ]).optional(),
  cursor: StudioWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StudioScalarFieldEnumSchema,StudioScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default StudioFindManyArgsSchema;
