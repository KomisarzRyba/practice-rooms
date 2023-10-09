import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutBookingInputSchema } from './UserUpdateWithoutBookingInputSchema';
import { UserUncheckedUpdateWithoutBookingInputSchema } from './UserUncheckedUpdateWithoutBookingInputSchema';

export const UserUpdateToOneWithWhereWithoutBookingInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBookingInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutBookingInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBookingInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutBookingInputSchema;
