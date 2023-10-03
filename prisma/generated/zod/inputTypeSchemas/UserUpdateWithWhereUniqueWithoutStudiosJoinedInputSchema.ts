import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateWithoutStudiosJoinedInputSchema } from './UserUpdateWithoutStudiosJoinedInputSchema';
import { UserUncheckedUpdateWithoutStudiosJoinedInputSchema } from './UserUncheckedUpdateWithoutStudiosJoinedInputSchema';

export const UserUpdateWithWhereUniqueWithoutStudiosJoinedInputSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutStudiosJoinedInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserUpdateWithoutStudiosJoinedInputSchema),z.lazy(() => UserUncheckedUpdateWithoutStudiosJoinedInputSchema) ]),
}).strict();

export default UserUpdateWithWhereUniqueWithoutStudiosJoinedInputSchema;
