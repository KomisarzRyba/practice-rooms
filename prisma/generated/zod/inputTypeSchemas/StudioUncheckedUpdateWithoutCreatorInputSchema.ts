import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { StudioUpdateinvitedUserEmailsInputSchema } from './StudioUpdateinvitedUserEmailsInputSchema';
import { UserUncheckedUpdateManyWithoutStudiosJoinedNestedInputSchema } from './UserUncheckedUpdateManyWithoutStudiosJoinedNestedInputSchema';
import { RoomUncheckedUpdateManyWithoutStudioNestedInputSchema } from './RoomUncheckedUpdateManyWithoutStudioNestedInputSchema';
import { SchedulePropertiesUncheckedUpdateOneWithoutStudioNestedInputSchema } from './SchedulePropertiesUncheckedUpdateOneWithoutStudioNestedInputSchema';

export const StudioUncheckedUpdateWithoutCreatorInputSchema: z.ZodType<Prisma.StudioUncheckedUpdateWithoutCreatorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invitedUserEmails: z.union([ z.lazy(() => StudioUpdateinvitedUserEmailsInputSchema),z.string().array() ]).optional(),
  members: z.lazy(() => UserUncheckedUpdateManyWithoutStudiosJoinedNestedInputSchema).optional(),
  rooms: z.lazy(() => RoomUncheckedUpdateManyWithoutStudioNestedInputSchema).optional(),
  scheduleProperties: z.lazy(() => SchedulePropertiesUncheckedUpdateOneWithoutStudioNestedInputSchema).optional()
}).strict();

export default StudioUncheckedUpdateWithoutCreatorInputSchema;
