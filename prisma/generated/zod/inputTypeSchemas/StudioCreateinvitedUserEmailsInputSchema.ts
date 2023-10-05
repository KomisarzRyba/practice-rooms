import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const StudioCreateinvitedUserEmailsInputSchema: z.ZodType<Prisma.StudioCreateinvitedUserEmailsInput> = z.object({
  set: z.string().array()
}).strict();

export default StudioCreateinvitedUserEmailsInputSchema;
