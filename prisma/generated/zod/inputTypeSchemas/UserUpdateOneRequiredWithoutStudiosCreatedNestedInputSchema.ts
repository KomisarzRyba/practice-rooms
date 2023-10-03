import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutStudiosCreatedInputSchema } from './UserCreateWithoutStudiosCreatedInputSchema';
import { UserUncheckedCreateWithoutStudiosCreatedInputSchema } from './UserUncheckedCreateWithoutStudiosCreatedInputSchema';
import { UserCreateOrConnectWithoutStudiosCreatedInputSchema } from './UserCreateOrConnectWithoutStudiosCreatedInputSchema';
import { UserUpsertWithoutStudiosCreatedInputSchema } from './UserUpsertWithoutStudiosCreatedInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutStudiosCreatedInputSchema } from './UserUpdateToOneWithWhereWithoutStudiosCreatedInputSchema';
import { UserUpdateWithoutStudiosCreatedInputSchema } from './UserUpdateWithoutStudiosCreatedInputSchema';
import { UserUncheckedUpdateWithoutStudiosCreatedInputSchema } from './UserUncheckedUpdateWithoutStudiosCreatedInputSchema';

export const UserUpdateOneRequiredWithoutStudiosCreatedNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutStudiosCreatedNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutStudiosCreatedInputSchema),z.lazy(() => UserUncheckedCreateWithoutStudiosCreatedInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutStudiosCreatedInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutStudiosCreatedInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutStudiosCreatedInputSchema),z.lazy(() => UserUpdateWithoutStudiosCreatedInputSchema),z.lazy(() => UserUncheckedUpdateWithoutStudiosCreatedInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutStudiosCreatedNestedInputSchema;
