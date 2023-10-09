import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutBookingInputSchema } from './UserCreateWithoutBookingInputSchema';
import { UserUncheckedCreateWithoutBookingInputSchema } from './UserUncheckedCreateWithoutBookingInputSchema';

export const UserCreateOrConnectWithoutBookingInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBookingInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutBookingInputSchema),z.lazy(() => UserUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutBookingInputSchema;
