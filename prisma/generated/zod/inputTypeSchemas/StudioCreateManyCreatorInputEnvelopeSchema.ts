import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioCreateManyCreatorInputSchema } from './StudioCreateManyCreatorInputSchema';

export const StudioCreateManyCreatorInputEnvelopeSchema: z.ZodType<Prisma.StudioCreateManyCreatorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => StudioCreateManyCreatorInputSchema),z.lazy(() => StudioCreateManyCreatorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default StudioCreateManyCreatorInputEnvelopeSchema;
