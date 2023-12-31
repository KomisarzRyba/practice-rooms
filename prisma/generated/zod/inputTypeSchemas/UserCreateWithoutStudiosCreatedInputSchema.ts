import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema';
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema';
import { StudioCreateNestedManyWithoutMembersInputSchema } from './StudioCreateNestedManyWithoutMembersInputSchema';
import { BookingCreateNestedManyWithoutOwnerInputSchema } from './BookingCreateNestedManyWithoutOwnerInputSchema';

export const UserCreateWithoutStudiosCreatedInputSchema: z.ZodType<Prisma.UserCreateWithoutStudiosCreatedInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  studiosJoined: z.lazy(() => StudioCreateNestedManyWithoutMembersInputSchema).optional(),
  Booking: z.lazy(() => BookingCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export default UserCreateWithoutStudiosCreatedInputSchema;
