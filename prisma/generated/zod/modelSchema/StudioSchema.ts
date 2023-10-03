import { z } from 'zod';

/////////////////////////////////////////
// STUDIO SCHEMA
/////////////////////////////////////////

export const StudioSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  description: z.string().nullable(),
  creatorId: z.string(),
})

export type Studio = z.infer<typeof StudioSchema>

export default StudioSchema;
