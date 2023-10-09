import { z } from 'zod';

export const BookingScalarFieldEnumSchema = z.enum(['id','ownerId','roomId','createdAt','updatedAt','startTime','endTime']);

export default BookingScalarFieldEnumSchema;
