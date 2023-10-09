import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { StudioUpdateinvitedUserEmailsInputSchema } from './StudioUpdateinvitedUserEmailsInputSchema';
import { UserUpdateOneRequiredWithoutStudiosCreatedNestedInputSchema } from './UserUpdateOneRequiredWithoutStudiosCreatedNestedInputSchema';
import { RoomUpdateManyWithoutStudioNestedInputSchema } from './RoomUpdateManyWithoutStudioNestedInputSchema';
import { SchedulePropertiesUpdateOneWithoutStudioNestedInputSchema } from './SchedulePropertiesUpdateOneWithoutStudioNestedInputSchema';

export const StudioUpdateWithoutMembersInputSchema: z.ZodType<Prisma.StudioUpdateWithoutMembersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invitedUserEmails: z.union([ z.lazy(() => StudioUpdateinvitedUserEmailsInputSchema),z.string().array() ]).optional(),
  creator: z.lazy(() => UserUpdateOneRequiredWithoutStudiosCreatedNestedInputSchema).optional(),
  rooms: z.lazy(() => RoomUpdateManyWithoutStudioNestedInputSchema).optional(),
  scheduleProperties: z.lazy(() => SchedulePropertiesUpdateOneWithoutStudioNestedInputSchema).optional()
}).strict();

export default StudioUpdateWithoutMembersInputSchema;
