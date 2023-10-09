import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioCreateinvitedUserEmailsInputSchema } from './StudioCreateinvitedUserEmailsInputSchema';
import { UserCreateNestedOneWithoutStudiosCreatedInputSchema } from './UserCreateNestedOneWithoutStudiosCreatedInputSchema';
import { UserCreateNestedManyWithoutStudiosJoinedInputSchema } from './UserCreateNestedManyWithoutStudiosJoinedInputSchema';
import { SchedulePropertiesCreateNestedOneWithoutStudioInputSchema } from './SchedulePropertiesCreateNestedOneWithoutStudioInputSchema';

export const StudioCreateWithoutRoomsInputSchema: z.ZodType<Prisma.StudioCreateWithoutRoomsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  invitedUserEmails: z.union([ z.lazy(() => StudioCreateinvitedUserEmailsInputSchema),z.string().array() ]).optional(),
  creator: z.lazy(() => UserCreateNestedOneWithoutStudiosCreatedInputSchema),
  members: z.lazy(() => UserCreateNestedManyWithoutStudiosJoinedInputSchema).optional(),
  scheduleProperties: z.lazy(() => SchedulePropertiesCreateNestedOneWithoutStudioInputSchema).optional()
}).strict();

export default StudioCreateWithoutRoomsInputSchema;
