import Login from '@/components/Login';
import UserWorkspaces from '@/components/UserWorkspaces';
import { buttonVariants } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { getAuthSession } from '@/lib/auth';
import { ReloadIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function Home() {
	const session = await getAuthSession();
	if (!session?.user) {
		return (
			<main className='container flex flex-col items-center justify-center py-8'>
				<Login />
			</main>
		);
	}
	return (
		<main className='container flex flex-col items-center py-8'>
			<Card className='w-full max-w-6xl'>
				<CardHeader>
					<CardTitle className='text-2xl'>
						Welcome back,{' '}
						{session.user.name?.split(' ')[0] || session.user.name}.
					</CardTitle>
					<CardDescription className='text-lg'>
						Find the Workspaces you are a part of below:
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='grid grid-cols-1 gap-2 font-medium sm:text-lg sm:grid-cols-2'>
						<Suspense
							fallback={
								<ReloadIcon className='w-8 h-8 animate-spin' />
							}
						>
							<UserWorkspaces />
						</Suspense>
					</div>
				</CardContent>
				<CardFooter className='justify-end gap-2'>
					<Link href='/workspace/join' className={buttonVariants()}>
						Join a Workspace
					</Link>
					<Link
						href='/workspace/create'
						className={buttonVariants({ variant: 'outline' })}
					>
						Create new Workspace
					</Link>
				</CardFooter>
			</Card>
		</main>
	);
}
