import { z } from 'zod';

export const RoomScalarFieldEnumSchema = z.enum(['id','name','studioId']);

export default RoomScalarFieldEnumSchema;
