import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  accounts: z.boolean().optional(),
  sessions: z.boolean().optional(),
  studiosCreated: z.boolean().optional(),
  studiosJoined: z.boolean().optional(),
  Booking: z.boolean().optional(),
}).strict();

export default UserCountOutputTypeSelectSchema;
