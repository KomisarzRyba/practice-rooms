import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInputSchema';
import { StudioUncheckedUpdateManyWithoutCreatorNestedInputSchema } from './StudioUncheckedUpdateManyWithoutCreatorNestedInputSchema';
import { StudioUncheckedUpdateManyWithoutMembersNestedInputSchema } from './StudioUncheckedUpdateManyWithoutMembersNestedInputSchema';

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  studiosCreated: z.lazy(() => StudioUncheckedUpdateManyWithoutCreatorNestedInputSchema).optional(),
  studiosJoined: z.lazy(() => StudioUncheckedUpdateManyWithoutMembersNestedInputSchema).optional()
}).strict();

export default UserUncheckedUpdateWithoutAccountsInputSchema;
