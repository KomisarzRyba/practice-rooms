import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StudioCreateinvitedUserEmailsInputSchema } from './StudioCreateinvitedUserEmailsInputSchema';
import { UserUncheckedCreateNestedManyWithoutStudiosJoinedInputSchema } from './UserUncheckedCreateNestedManyWithoutStudiosJoinedInputSchema';
import { RoomUncheckedCreateNestedManyWithoutStudioInputSchema } from './RoomUncheckedCreateNestedManyWithoutStudioInputSchema';

export const StudioUncheckedCreateWithoutSchedulePropertiesInputSchema: z.ZodType<Prisma.StudioUncheckedCreateWithoutSchedulePropertiesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  creatorId: z.string(),
  invitedUserEmails: z.union([ z.lazy(() => StudioCreateinvitedUserEmailsInputSchema),z.string().array() ]).optional(),
  members: z.lazy(() => UserUncheckedCreateNestedManyWithoutStudiosJoinedInputSchema).optional(),
  rooms: z.lazy(() => RoomUncheckedCreateNestedManyWithoutStudioInputSchema).optional()
}).strict();

export default StudioUncheckedCreateWithoutSchedulePropertiesInputSchema;
