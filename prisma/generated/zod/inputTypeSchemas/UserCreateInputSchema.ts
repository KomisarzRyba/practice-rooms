import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema';
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema';
import { StudioCreateNestedManyWithoutCreatorInputSchema } from './StudioCreateNestedManyWithoutCreatorInputSchema';
import { StudioCreateNestedManyWithoutMembersInputSchema } from './StudioCreateNestedManyWithoutMembersInputSchema';
import { BookingCreateNestedManyWithoutOwnerInputSchema } from './BookingCreateNestedManyWithoutOwnerInputSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  studiosCreated: z.lazy(() => StudioCreateNestedManyWithoutCreatorInputSchema).optional(),
  studiosJoined: z.lazy(() => StudioCreateNestedManyWithoutMembersInputSchema).optional(),
  Booking: z.lazy(() => BookingCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export default UserCreateInputSchema;
