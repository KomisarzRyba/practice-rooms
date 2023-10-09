import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from './AccountUncheckedCreateNestedManyWithoutUserInputSchema';
import { SessionUncheckedCreateNestedManyWithoutUserInputSchema } from './SessionUncheckedCreateNestedManyWithoutUserInputSchema';
import { StudioUncheckedCreateNestedManyWithoutMembersInputSchema } from './StudioUncheckedCreateNestedManyWithoutMembersInputSchema';
import { BookingUncheckedCreateNestedManyWithoutOwnerInputSchema } from './BookingUncheckedCreateNestedManyWithoutOwnerInputSchema';

export const UserUncheckedCreateWithoutStudiosCreatedInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutStudiosCreatedInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  studiosJoined: z.lazy(() => StudioUncheckedCreateNestedManyWithoutMembersInputSchema).optional(),
  Booking: z.lazy(() => BookingUncheckedCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutStudiosCreatedInputSchema;
