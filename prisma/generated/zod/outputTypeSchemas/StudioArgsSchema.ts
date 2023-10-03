import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudioSelectSchema } from '../inputTypeSchemas/StudioSelectSchema';
import { StudioIncludeSchema } from '../inputTypeSchemas/StudioIncludeSchema';

export const StudioArgsSchema: z.ZodType<Prisma.StudioDefaultArgs> = z.object({
  select: z.lazy(() => StudioSelectSchema).optional(),
  include: z.lazy(() => StudioIncludeSchema).optional(),
}).strict();

export default StudioArgsSchema;
