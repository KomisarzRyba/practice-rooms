import * as z from "zod"
import * as imports from "../null"
import { CompleteStudio, relatedStudio } from "./index"

export const room = z.object({
  id: z.string(),
  name: z.string(),
  studioId: z.string(),
})

export interface CompleteRoom extends z.infer<typeof room> {
  studio: CompleteStudio
}

/**
 * relatedRoom contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedRoom: z.ZodSchema<CompleteRoom> = z.lazy(() => room.extend({
  studio: relatedStudio,
}))
