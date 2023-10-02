import * as z from "zod"
import * as imports from "../null"
import { CompleteUser, relatedUser } from "./index"

export const session = z.object({
  id: z.string(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.date(),
})

export interface CompleteSession extends z.infer<typeof session> {
  user: CompleteUser
}

/**
 * relatedSession contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedSession: z.ZodSchema<CompleteSession> = z.lazy(() => session.extend({
  user: relatedUser,
}))
