import { z } from 'zod';

export const StudioScalarFieldEnumSchema = z.enum(['id','name','description','creatorId','invitedUserEmails']);

export default StudioScalarFieldEnumSchema;
