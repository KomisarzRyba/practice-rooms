'use client';

import { SessionProvider } from 'next-auth/react';
import { FC, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './ui/toaster';

const queryClient = new QueryClient();

const Providers: FC<PropsWithChildren> = ({ children }) => {
	return (
		<SessionProvider>
			<QueryClientProvider client={queryClient}>
				<Toaster />
				{children}
			</QueryClientProvider>
		</SessionProvider>
	);
};

export default Providers;
