import { z } from 'zod';

export const newWorkspace = z.object({
	name: z.string().min(3).max(127),
	description: z.optional(z.string().max(255)),
});

export type NewWorkspace = z.infer<typeof newWorkspace>;
