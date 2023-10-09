import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from './AccountUncheckedCreateNestedManyWithoutUserInputSchema';
import { SessionUncheckedCreateNestedManyWithoutUserInputSchema } from './SessionUncheckedCreateNestedManyWithoutUserInputSchema';
import { StudioUncheckedCreateNestedManyWithoutCreatorInputSchema } from './StudioUncheckedCreateNestedManyWithoutCreatorInputSchema';
import { StudioUncheckedCreateNestedManyWithoutMembersInputSchema } from './StudioUncheckedCreateNestedManyWithoutMembersInputSchema';

export const UserUncheckedCreateWithoutBookingInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutBookingInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  studiosCreated: z.lazy(() => StudioUncheckedCreateNestedManyWithoutCreatorInputSchema).optional(),
  studiosJoined: z.lazy(() => StudioUncheckedCreateNestedManyWithoutMembersInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutBookingInputSchema;
