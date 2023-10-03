import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from './AccountUncheckedCreateNestedManyWithoutUserInputSchema';
import { StudioUncheckedCreateNestedManyWithoutCreatorInputSchema } from './StudioUncheckedCreateNestedManyWithoutCreatorInputSchema';
import { StudioUncheckedCreateNestedManyWithoutMembersInputSchema } from './StudioUncheckedCreateNestedManyWithoutMembersInputSchema';

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  studiosCreated: z.lazy(() => StudioUncheckedCreateNestedManyWithoutCreatorInputSchema).optional(),
  studiosJoined: z.lazy(() => StudioUncheckedCreateNestedManyWithoutMembersInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutSessionsInputSchema;
