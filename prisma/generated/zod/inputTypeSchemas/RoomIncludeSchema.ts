import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudioArgsSchema } from "../outputTypeSchemas/StudioArgsSchema"

export const RoomIncludeSchema: z.ZodType<Prisma.RoomInclude> = z.object({
  studio: z.union([z.boolean(),z.lazy(() => StudioArgsSchema)]).optional(),
}).strict()

export default RoomIncludeSchema;
