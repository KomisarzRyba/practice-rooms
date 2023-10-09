import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema';
import { StudioCreateNestedManyWithoutCreatorInputSchema } from './StudioCreateNestedManyWithoutCreatorInputSchema';
import { StudioCreateNestedManyWithoutMembersInputSchema } from './StudioCreateNestedManyWithoutMembersInputSchema';
import { BookingCreateNestedManyWithoutOwnerInputSchema } from './BookingCreateNestedManyWithoutOwnerInputSchema';

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  studiosCreated: z.lazy(() => StudioCreateNestedManyWithoutCreatorInputSchema).optional(),
  studiosJoined: z.lazy(() => StudioCreateNestedManyWithoutMembersInputSchema).optional(),
  Booking: z.lazy(() => BookingCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export default UserCreateWithoutSessionsInputSchema;
