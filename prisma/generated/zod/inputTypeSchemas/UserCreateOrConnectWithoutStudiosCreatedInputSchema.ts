import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutStudiosCreatedInputSchema } from './UserCreateWithoutStudiosCreatedInputSchema';
import { UserUncheckedCreateWithoutStudiosCreatedInputSchema } from './UserUncheckedCreateWithoutStudiosCreatedInputSchema';

export const UserCreateOrConnectWithoutStudiosCreatedInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutStudiosCreatedInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutStudiosCreatedInputSchema),z.lazy(() => UserUncheckedCreateWithoutStudiosCreatedInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutStudiosCreatedInputSchema;
