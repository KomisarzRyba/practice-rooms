import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioCreateinvitedUserEmailsInputSchema } from './StudioCreateinvitedUserEmailsInputSchema';
import { UserUncheckedCreateNestedManyWithoutStudiosJoinedInputSchema } from './UserUncheckedCreateNestedManyWithoutStudiosJoinedInputSchema';
import { RoomUncheckedCreateNestedManyWithoutStudioInputSchema } from './RoomUncheckedCreateNestedManyWithoutStudioInputSchema';
import { SchedulePropertiesUncheckedCreateNestedOneWithoutStudioInputSchema } from './SchedulePropertiesUncheckedCreateNestedOneWithoutStudioInputSchema';

export const StudioUncheckedCreateInputSchema: z.ZodType<Prisma.StudioUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  creatorId: z.string(),
  invitedUserEmails: z.union([ z.lazy(() => StudioCreateinvitedUserEmailsInputSchema),z.string().array() ]).optional(),
  members: z.lazy(() => UserUncheckedCreateNestedManyWithoutStudiosJoinedInputSchema).optional(),
  rooms: z.lazy(() => RoomUncheckedCreateNestedManyWithoutStudioInputSchema).optional(),
  scheduleProperties: z.lazy(() => SchedulePropertiesUncheckedCreateNestedOneWithoutStudioInputSchema).optional()
}).strict();

export default StudioUncheckedCreateInputSchema;
