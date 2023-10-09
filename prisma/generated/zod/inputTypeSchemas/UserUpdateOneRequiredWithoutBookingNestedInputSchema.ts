import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutBookingInputSchema } from './UserCreateWithoutBookingInputSchema';
import { UserUncheckedCreateWithoutBookingInputSchema } from './UserUncheckedCreateWithoutBookingInputSchema';
import { UserCreateOrConnectWithoutBookingInputSchema } from './UserCreateOrConnectWithoutBookingInputSchema';
import { UserUpsertWithoutBookingInputSchema } from './UserUpsertWithoutBookingInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutBookingInputSchema } from './UserUpdateToOneWithWhereWithoutBookingInputSchema';
import { UserUpdateWithoutBookingInputSchema } from './UserUpdateWithoutBookingInputSchema';
import { UserUncheckedUpdateWithoutBookingInputSchema } from './UserUncheckedUpdateWithoutBookingInputSchema';

export const UserUpdateOneRequiredWithoutBookingNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBookingNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBookingInputSchema),z.lazy(() => UserUncheckedCreateWithoutBookingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBookingInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBookingInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutBookingInputSchema),z.lazy(() => UserUpdateWithoutBookingInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBookingInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutBookingNestedInputSchema;
