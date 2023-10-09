import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioCreateinvitedUserEmailsInputSchema } from './StudioCreateinvitedUserEmailsInputSchema';
import { UserCreateNestedManyWithoutStudiosJoinedInputSchema } from './UserCreateNestedManyWithoutStudiosJoinedInputSchema';
import { RoomCreateNestedManyWithoutStudioInputSchema } from './RoomCreateNestedManyWithoutStudioInputSchema';
import { SchedulePropertiesCreateNestedOneWithoutStudioInputSchema } from './SchedulePropertiesCreateNestedOneWithoutStudioInputSchema';

export const StudioCreateWithoutCreatorInputSchema: z.ZodType<Prisma.StudioCreateWithoutCreatorInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  invitedUserEmails: z.union([ z.lazy(() => StudioCreateinvitedUserEmailsInputSchema),z.string().array() ]).optional(),
  members: z.lazy(() => UserCreateNestedManyWithoutStudiosJoinedInputSchema).optional(),
  rooms: z.lazy(() => RoomCreateNestedManyWithoutStudioInputSchema).optional(),
  scheduleProperties: z.lazy(() => SchedulePropertiesCreateNestedOneWithoutStudioInputSchema).optional()
}).strict();

export default StudioCreateWithoutCreatorInputSchema;
