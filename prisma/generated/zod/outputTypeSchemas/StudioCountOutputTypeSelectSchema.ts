import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const StudioCountOutputTypeSelectSchema: z.ZodType<Prisma.StudioCountOutputTypeSelect> = z.object({
  members: z.boolean().optional(),
  rooms: z.boolean().optional(),
}).strict();

export default StudioCountOutputTypeSelectSchema;
