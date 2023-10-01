'use client';

import Link from 'next/link';
import { ComponentPropsWithRef, FC } from 'react';
import { Icons } from './Icons';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import { LoadingButton } from './ui/loading-button';
import { cn } from '@/lib/tw-utils';
import { signIn } from 'next-auth/react';

const Login: FC<ComponentPropsWithRef<'div'>> = ({ className, ...props }) => {
	return (
		<Card className={cn('max-w-lg', className)} {...props}>
			<CardHeader>
				<CardTitle>Welcome back!</CardTitle>
				<CardDescription>
					If this is your first time here,{' '}
					<Link href='/register'>create an account</Link>.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<LoadingButton
					size='sm'
					className='w-full'
					onClick={() => signIn('google')}
				>
					<Icons.google className='w-4 h-4 mr-2' />
					Google
				</LoadingButton>
			</CardContent>
			<CardFooter>
				<span className='text-sm text-muted-foreground'>
					By continuing you agree to our User Agreement and Privacy
					Policy.
				</span>
			</CardFooter>
		</Card>
	);
};

export default Login;
