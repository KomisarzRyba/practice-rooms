import { z } from 'zod';

/////////////////////////////////////////
// SCHEDULE PROPERTIES SCHEMA
/////////////////////////////////////////

export const SchedulePropertiesSchema = z.object({
  studioId: z.string(),
  dayStart: z.coerce.date(),
  dayEnd: z.coerce.date(),
})

export type ScheduleProperties = z.infer<typeof SchedulePropertiesSchema>

export default SchedulePropertiesSchema;
