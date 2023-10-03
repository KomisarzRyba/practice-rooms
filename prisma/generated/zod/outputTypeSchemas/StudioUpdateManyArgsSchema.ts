import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudioUpdateManyMutationInputSchema } from '../inputTypeSchemas/StudioUpdateManyMutationInputSchema'
import { StudioUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/StudioUncheckedUpdateManyInputSchema'
import { StudioWhereInputSchema } from '../inputTypeSchemas/StudioWhereInputSchema'

export const StudioUpdateManyArgsSchema: z.ZodType<Prisma.StudioUpdateManyArgs> = z.object({
  data: z.union([ StudioUpdateManyMutationInputSchema,StudioUncheckedUpdateManyInputSchema ]),
  where: StudioWhereInputSchema.optional(),
}).strict()

export default StudioUpdateManyArgsSchema;
