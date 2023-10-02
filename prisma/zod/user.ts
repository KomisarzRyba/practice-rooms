import * as z from "zod"
import * as imports from "../null"
import { CompleteAccount, relatedAccount, CompleteSession, relatedSession, CompleteStudio, relatedStudio } from "./index"

export const user = z.object({
  id: z.string(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
})

export interface CompleteUser extends z.infer<typeof user> {
  accounts: CompleteAccount[]
  sessions: CompleteSession[]
  studiosCreated: CompleteStudio[]
  studiosJoined: CompleteStudio[]
}

/**
 * relatedUser contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedUser: z.ZodSchema<CompleteUser> = z.lazy(() => user.extend({
  accounts: relatedAccount.array(),
  sessions: relatedSession.array(),
  studiosCreated: relatedStudio.array(),
  studiosJoined: relatedStudio.array(),
}))
