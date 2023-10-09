import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutBookingInputSchema } from './UserCreateWithoutBookingInputSchema';
import { UserUncheckedCreateWithoutBookingInputSchema } from './UserUncheckedCreateWithoutBookingInputSchema';
import { UserCreateOrConnectWithoutBookingInputSchema } from './UserCreateOrConnectWithoutBookingInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutBookingInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBookingInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBookingInputSchema),z.lazy(() => UserUncheckedCreateWithoutBookingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBookingInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutBookingInputSchema;
