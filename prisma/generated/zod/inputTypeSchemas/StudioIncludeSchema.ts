import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { UserFindManyArgsSchema } from "../outputTypeSchemas/UserFindManyArgsSchema"
import { RoomFindManyArgsSchema } from "../outputTypeSchemas/RoomFindManyArgsSchema"
import { SchedulePropertiesArgsSchema } from "../outputTypeSchemas/SchedulePropertiesArgsSchema"
import { StudioCountOutputTypeArgsSchema } from "../outputTypeSchemas/StudioCountOutputTypeArgsSchema"

export const StudioIncludeSchema: z.ZodType<Prisma.StudioInclude> = z.object({
  creator: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  members: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  rooms: z.union([z.boolean(),z.lazy(() => RoomFindManyArgsSchema)]).optional(),
  scheduleProperties: z.union([z.boolean(),z.lazy(() => SchedulePropertiesArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => StudioCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default StudioIncludeSchema;
