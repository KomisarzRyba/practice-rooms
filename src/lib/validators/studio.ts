import { z } from 'zod';

export const newStudio = z.object({
	name: z
		.string({ required_error: 'Name is required' })
		.min(3, 'Name must contain at least 3 characters.')
		.max(127),
	description: z.optional(z.string().max(255)),
});
export type NewStudio = z.infer<typeof newStudio>;

export const studioDisplaySettings = newStudio;
export type StudioDisplaySettings = z.infer<typeof studioDisplaySettings>;

export const studioScheduleProperties = z.object({
	dayStart: z.string().regex(/^(?:[01]\d|2[0-3]):[0-5]\d$/),
	dayEnd: z.string().regex(/^(?:[01]\d|2[0-3]):[0-5]\d$/),
});
export type StudioScheduleProperties = z.infer<typeof studioScheduleProperties>;
