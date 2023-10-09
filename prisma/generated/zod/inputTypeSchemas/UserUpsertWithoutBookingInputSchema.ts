import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserUpdateWithoutBookingInputSchema } from './UserUpdateWithoutBookingInputSchema';
import { UserUncheckedUpdateWithoutBookingInputSchema } from './UserUncheckedUpdateWithoutBookingInputSchema';
import { UserCreateWithoutBookingInputSchema } from './UserCreateWithoutBookingInputSchema';
import { UserUncheckedCreateWithoutBookingInputSchema } from './UserUncheckedCreateWithoutBookingInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutBookingInputSchema: z.ZodType<Prisma.UserUpsertWithoutBookingInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutBookingInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBookingInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutBookingInputSchema),z.lazy(() => UserUncheckedCreateWithoutBookingInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutBookingInputSchema;
