import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioCreateinvitedUserEmailsInputSchema } from './StudioCreateinvitedUserEmailsInputSchema';
import { RoomUncheckedCreateNestedManyWithoutStudioInputSchema } from './RoomUncheckedCreateNestedManyWithoutStudioInputSchema';
import { SchedulePropertiesUncheckedCreateNestedOneWithoutStudioInputSchema } from './SchedulePropertiesUncheckedCreateNestedOneWithoutStudioInputSchema';

export const StudioUncheckedCreateWithoutMembersInputSchema: z.ZodType<Prisma.StudioUncheckedCreateWithoutMembersInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  creatorId: z.string(),
  invitedUserEmails: z.union([ z.lazy(() => StudioCreateinvitedUserEmailsInputSchema),z.string().array() ]).optional(),
  rooms: z.lazy(() => RoomUncheckedCreateNestedManyWithoutStudioInputSchema).optional(),
  scheduleProperties: z.lazy(() => SchedulePropertiesUncheckedCreateNestedOneWithoutStudioInputSchema).optional()
}).strict();

export default StudioUncheckedCreateWithoutMembersInputSchema;
