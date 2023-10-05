import { z } from 'zod';

export const newMember = z.object({
	studioId: z.string(),
	email: z.string().email(),
});
export type NewMember = z.infer<typeof newMember>;
