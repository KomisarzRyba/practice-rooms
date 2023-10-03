import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutStudiosJoinedInputSchema } from './UserCreateWithoutStudiosJoinedInputSchema';
import { UserUncheckedCreateWithoutStudiosJoinedInputSchema } from './UserUncheckedCreateWithoutStudiosJoinedInputSchema';
import { UserCreateOrConnectWithoutStudiosJoinedInputSchema } from './UserCreateOrConnectWithoutStudiosJoinedInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedManyWithoutStudiosJoinedInputSchema: z.ZodType<Prisma.UserCreateNestedManyWithoutStudiosJoinedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutStudiosJoinedInputSchema),z.lazy(() => UserCreateWithoutStudiosJoinedInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutStudiosJoinedInputSchema),z.lazy(() => UserUncheckedCreateWithoutStudiosJoinedInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutStudiosJoinedInputSchema),z.lazy(() => UserCreateOrConnectWithoutStudiosJoinedInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default UserCreateNestedManyWithoutStudiosJoinedInputSchema;
