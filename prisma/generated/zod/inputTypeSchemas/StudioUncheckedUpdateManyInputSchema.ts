import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { StudioUpdateinvitedUserEmailsInputSchema } from './StudioUpdateinvitedUserEmailsInputSchema';

export const StudioUncheckedUpdateManyInputSchema: z.ZodType<Prisma.StudioUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  creatorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  invitedUserEmails: z.union([ z.lazy(() => StudioUpdateinvitedUserEmailsInputSchema),z.string().array() ]).optional(),
}).strict();

export default StudioUncheckedUpdateManyInputSchema;
