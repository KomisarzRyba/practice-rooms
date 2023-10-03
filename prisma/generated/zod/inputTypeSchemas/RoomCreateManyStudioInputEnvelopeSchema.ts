import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoomCreateManyStudioInputSchema } from './RoomCreateManyStudioInputSchema';

export const RoomCreateManyStudioInputEnvelopeSchema: z.ZodType<Prisma.RoomCreateManyStudioInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RoomCreateManyStudioInputSchema),z.lazy(() => RoomCreateManyStudioInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RoomCreateManyStudioInputEnvelopeSchema;
