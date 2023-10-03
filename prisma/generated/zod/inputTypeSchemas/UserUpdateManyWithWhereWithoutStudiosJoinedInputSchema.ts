import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserScalarWhereInputSchema } from './UserScalarWhereInputSchema';
import { UserUpdateManyMutationInputSchema } from './UserUpdateManyMutationInputSchema';
import { UserUncheckedUpdateManyWithoutStudiosJoinedInputSchema } from './UserUncheckedUpdateManyWithoutStudiosJoinedInputSchema';

export const UserUpdateManyWithWhereWithoutStudiosJoinedInputSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutStudiosJoinedInput> = z.object({
  where: z.lazy(() => UserScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserUpdateManyMutationInputSchema),z.lazy(() => UserUncheckedUpdateManyWithoutStudiosJoinedInputSchema) ]),
}).strict();

export default UserUpdateManyWithWhereWithoutStudiosJoinedInputSchema;
