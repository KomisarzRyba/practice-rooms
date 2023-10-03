import { z } from 'zod';

export const newStudio = z.object({
	name: z
		.string({ required_error: 'Name is required' })
		.min(3, 'Name must contain at least 3 characters.')
		.max(127),
	description: z.optional(z.string().max(255)),
});
export type NewStudio = z.infer<typeof newStudio>;

export const studioGeneralSettings = newStudio;
export type StudioGeneralSettings = z.infer<typeof studioGeneralSettings>;
