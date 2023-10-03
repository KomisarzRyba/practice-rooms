import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudioArgsSchema } from "../outputTypeSchemas/StudioArgsSchema"

export const RoomSelectSchema: z.ZodType<Prisma.RoomSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  studioId: z.boolean().optional(),
  studio: z.union([z.boolean(),z.lazy(() => StudioArgsSchema)]).optional(),
}).strict()

export default RoomSelectSchema;
