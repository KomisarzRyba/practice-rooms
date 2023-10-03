import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutStudiosJoinedInputSchema } from './UserCreateWithoutStudiosJoinedInputSchema';
import { UserUncheckedCreateWithoutStudiosJoinedInputSchema } from './UserUncheckedCreateWithoutStudiosJoinedInputSchema';

export const UserCreateOrConnectWithoutStudiosJoinedInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutStudiosJoinedInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutStudiosJoinedInputSchema),z.lazy(() => UserUncheckedCreateWithoutStudiosJoinedInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutStudiosJoinedInputSchema;
