import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoomWhereInputSchema } from '../inputTypeSchemas/RoomWhereInputSchema'
import { RoomOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RoomOrderByWithAggregationInputSchema'
import { RoomScalarFieldEnumSchema } from '../inputTypeSchemas/RoomScalarFieldEnumSchema'
import { RoomScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RoomScalarWhereWithAggregatesInputSchema'

export const RoomGroupByArgsSchema: z.ZodType<Prisma.RoomGroupByArgs> = z.object({
  where: RoomWhereInputSchema.optional(),
  orderBy: z.union([ RoomOrderByWithAggregationInputSchema.array(),RoomOrderByWithAggregationInputSchema ]).optional(),
  by: RoomScalarFieldEnumSchema.array(),
  having: RoomScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default RoomGroupByArgsSchema;
