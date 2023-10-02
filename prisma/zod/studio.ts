import * as z from "zod"
import * as imports from "../null"
import { CompleteUser, relatedUser } from "./index"

export const studio = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  creatorId: z.string(),
})

export interface CompleteStudio extends z.infer<typeof studio> {
  creator: CompleteUser
  members: CompleteUser[]
}

/**
 * relatedStudio contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedStudio: z.ZodSchema<CompleteStudio> = z.lazy(() => studio.extend({
  creator: relatedUser,
  members: relatedUser.array(),
}))
