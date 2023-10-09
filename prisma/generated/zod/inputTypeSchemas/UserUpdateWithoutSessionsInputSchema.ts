import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { AccountUpdateManyWithoutUserNestedInputSchema } from './AccountUpdateManyWithoutUserNestedInputSchema';
import { StudioUpdateManyWithoutCreatorNestedInputSchema } from './StudioUpdateManyWithoutCreatorNestedInputSchema';
import { StudioUpdateManyWithoutMembersNestedInputSchema } from './StudioUpdateManyWithoutMembersNestedInputSchema';
import { BookingUpdateManyWithoutOwnerNestedInputSchema } from './BookingUpdateManyWithoutOwnerNestedInputSchema';

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  studiosCreated: z.lazy(() => StudioUpdateManyWithoutCreatorNestedInputSchema).optional(),
  studiosJoined: z.lazy(() => StudioUpdateManyWithoutMembersNestedInputSchema).optional(),
  Booking: z.lazy(() => BookingUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutSessionsInputSchema;
