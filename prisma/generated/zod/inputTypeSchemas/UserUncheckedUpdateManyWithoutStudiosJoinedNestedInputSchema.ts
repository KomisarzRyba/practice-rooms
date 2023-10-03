import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutStudiosJoinedInputSchema } from './UserCreateWithoutStudiosJoinedInputSchema';
import { UserUncheckedCreateWithoutStudiosJoinedInputSchema } from './UserUncheckedCreateWithoutStudiosJoinedInputSchema';
import { UserCreateOrConnectWithoutStudiosJoinedInputSchema } from './UserCreateOrConnectWithoutStudiosJoinedInputSchema';
import { UserUpsertWithWhereUniqueWithoutStudiosJoinedInputSchema } from './UserUpsertWithWhereUniqueWithoutStudiosJoinedInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateWithWhereUniqueWithoutStudiosJoinedInputSchema } from './UserUpdateWithWhereUniqueWithoutStudiosJoinedInputSchema';
import { UserUpdateManyWithWhereWithoutStudiosJoinedInputSchema } from './UserUpdateManyWithWhereWithoutStudiosJoinedInputSchema';
import { UserScalarWhereInputSchema } from './UserScalarWhereInputSchema';

export const UserUncheckedUpdateManyWithoutStudiosJoinedNestedInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutStudiosJoinedNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutStudiosJoinedInputSchema),z.lazy(() => UserCreateWithoutStudiosJoinedInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutStudiosJoinedInputSchema),z.lazy(() => UserUncheckedCreateWithoutStudiosJoinedInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutStudiosJoinedInputSchema),z.lazy(() => UserCreateOrConnectWithoutStudiosJoinedInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserUpsertWithWhereUniqueWithoutStudiosJoinedInputSchema),z.lazy(() => UserUpsertWithWhereUniqueWithoutStudiosJoinedInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithWhereUniqueWithoutStudiosJoinedInputSchema),z.lazy(() => UserUpdateWithWhereUniqueWithoutStudiosJoinedInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserUpdateManyWithWhereWithoutStudiosJoinedInputSchema),z.lazy(() => UserUpdateManyWithWhereWithoutStudiosJoinedInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default UserUncheckedUpdateManyWithoutStudiosJoinedNestedInputSchema;
