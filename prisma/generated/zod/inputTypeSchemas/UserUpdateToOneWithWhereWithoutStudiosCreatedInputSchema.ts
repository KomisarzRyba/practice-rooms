import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutStudiosCreatedInputSchema } from './UserUpdateWithoutStudiosCreatedInputSchema';
import { UserUncheckedUpdateWithoutStudiosCreatedInputSchema } from './UserUncheckedUpdateWithoutStudiosCreatedInputSchema';

export const UserUpdateToOneWithWhereWithoutStudiosCreatedInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutStudiosCreatedInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutStudiosCreatedInputSchema),z.lazy(() => UserUncheckedUpdateWithoutStudiosCreatedInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutStudiosCreatedInputSchema;
