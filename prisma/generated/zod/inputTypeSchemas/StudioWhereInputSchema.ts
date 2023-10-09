import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserListRelationFilterSchema } from './UserListRelationFilterSchema';
import { RoomListRelationFilterSchema } from './RoomListRelationFilterSchema';
import { SchedulePropertiesNullableRelationFilterSchema } from './SchedulePropertiesNullableRelationFilterSchema';
import { SchedulePropertiesWhereInputSchema } from './SchedulePropertiesWhereInputSchema';

export const StudioWhereInputSchema: z.ZodType<Prisma.StudioWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StudioWhereInputSchema),z.lazy(() => StudioWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudioWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudioWhereInputSchema),z.lazy(() => StudioWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  creatorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  invitedUserEmails: z.lazy(() => StringNullableListFilterSchema).optional(),
  creator: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  members: z.lazy(() => UserListRelationFilterSchema).optional(),
  rooms: z.lazy(() => RoomListRelationFilterSchema).optional(),
  scheduleProperties: z.union([ z.lazy(() => SchedulePropertiesNullableRelationFilterSchema),z.lazy(() => SchedulePropertiesWhereInputSchema) ]).optional().nullable(),
}).strict();

export default StudioWhereInputSchema;
