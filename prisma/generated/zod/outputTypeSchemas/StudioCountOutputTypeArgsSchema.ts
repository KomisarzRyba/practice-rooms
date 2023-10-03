import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudioCountOutputTypeSelectSchema } from './StudioCountOutputTypeSelectSchema';

export const StudioCountOutputTypeArgsSchema: z.ZodType<Prisma.StudioCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => StudioCountOutputTypeSelectSchema).nullish(),
}).strict();

export default StudioCountOutputTypeSelectSchema;
