import { z } from 'zod';

export const StudioScalarFieldEnumSchema = z.enum(['id','name','description','creatorId']);

export default StudioScalarFieldEnumSchema;
