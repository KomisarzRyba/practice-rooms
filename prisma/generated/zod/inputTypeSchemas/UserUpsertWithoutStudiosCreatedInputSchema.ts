import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserUpdateWithoutStudiosCreatedInputSchema } from './UserUpdateWithoutStudiosCreatedInputSchema';
import { UserUncheckedUpdateWithoutStudiosCreatedInputSchema } from './UserUncheckedUpdateWithoutStudiosCreatedInputSchema';
import { UserCreateWithoutStudiosCreatedInputSchema } from './UserCreateWithoutStudiosCreatedInputSchema';
import { UserUncheckedCreateWithoutStudiosCreatedInputSchema } from './UserUncheckedCreateWithoutStudiosCreatedInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutStudiosCreatedInputSchema: z.ZodType<Prisma.UserUpsertWithoutStudiosCreatedInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutStudiosCreatedInputSchema),z.lazy(() => UserUncheckedUpdateWithoutStudiosCreatedInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutStudiosCreatedInputSchema),z.lazy(() => UserUncheckedCreateWithoutStudiosCreatedInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutStudiosCreatedInputSchema;
