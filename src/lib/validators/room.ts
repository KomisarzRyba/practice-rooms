import { z } from 'zod';

export const newRoom = z.object({
	studioId: z.string(),
	name: z.string().min(1).max(63),
});
export type NewRoom = z.infer<typeof newRoom>;
