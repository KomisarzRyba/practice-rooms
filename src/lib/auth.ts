import { PrismaAdapter } from '@auth/prisma-adapter';
import { NextAuthOptions, getServerSession } from 'next-auth';
import { db } from './db';
import GoogleProvider from 'next-auth/providers/google';
import { nanoid } from 'nanoid';

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(db),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],
};

export const getAuthSession = () => getServerSession(authOptions);
