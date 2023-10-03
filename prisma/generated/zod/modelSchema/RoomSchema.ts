import { z } from 'zod';

/////////////////////////////////////////
// ROOM SCHEMA
/////////////////////////////////////////

export const RoomSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  studioId: z.string(),
})

export type Room = z.infer<typeof RoomSchema>

export default RoomSchema;
