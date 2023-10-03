import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutStudiosCreatedInputSchema } from './UserCreateWithoutStudiosCreatedInputSchema';
import { UserUncheckedCreateWithoutStudiosCreatedInputSchema } from './UserUncheckedCreateWithoutStudiosCreatedInputSchema';
import { UserCreateOrConnectWithoutStudiosCreatedInputSchema } from './UserCreateOrConnectWithoutStudiosCreatedInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutStudiosCreatedInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutStudiosCreatedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutStudiosCreatedInputSchema),z.lazy(() => UserUncheckedCreateWithoutStudiosCreatedInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutStudiosCreatedInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutStudiosCreatedInputSchema;
