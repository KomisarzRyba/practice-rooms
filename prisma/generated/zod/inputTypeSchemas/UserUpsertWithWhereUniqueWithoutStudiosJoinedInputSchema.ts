import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateWithoutStudiosJoinedInputSchema } from './UserUpdateWithoutStudiosJoinedInputSchema';
import { UserUncheckedUpdateWithoutStudiosJoinedInputSchema } from './UserUncheckedUpdateWithoutStudiosJoinedInputSchema';
import { UserCreateWithoutStudiosJoinedInputSchema } from './UserCreateWithoutStudiosJoinedInputSchema';
import { UserUncheckedCreateWithoutStudiosJoinedInputSchema } from './UserUncheckedCreateWithoutStudiosJoinedInputSchema';

export const UserUpsertWithWhereUniqueWithoutStudiosJoinedInputSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutStudiosJoinedInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserUpdateWithoutStudiosJoinedInputSchema),z.lazy(() => UserUncheckedUpdateWithoutStudiosJoinedInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutStudiosJoinedInputSchema),z.lazy(() => UserUncheckedCreateWithoutStudiosJoinedInputSchema) ]),
}).strict();

export default UserUpsertWithWhereUniqueWithoutStudiosJoinedInputSchema;
