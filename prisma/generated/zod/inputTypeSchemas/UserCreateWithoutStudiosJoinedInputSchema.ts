import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema';
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema';
import { StudioCreateNestedManyWithoutCreatorInputSchema } from './StudioCreateNestedManyWithoutCreatorInputSchema';

export const UserCreateWithoutStudiosJoinedInputSchema: z.ZodType<Prisma.UserCreateWithoutStudiosJoinedInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  studiosCreated: z.lazy(() => StudioCreateNestedManyWithoutCreatorInputSchema).optional()
}).strict();

export default UserCreateWithoutStudiosJoinedInputSchema;
