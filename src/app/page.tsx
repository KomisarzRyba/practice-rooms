import Login from '@/components/Login';
import UserStudios from '@/components/UserStudios';
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
import Link from 'next/link';

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
						Find the Studios you are a part of below:
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='grid grid-cols-1 gap-2 font-medium sm:text-lg sm:grid-cols-2'>
						<UserStudios />
					</div>
				</CardContent>
				<CardFooter className='justify-end gap-2'>
					<Link href='/studio/join' className={buttonVariants()}>
						Join a Studio
					</Link>
					<Link
						href='/studio/create'
						className={buttonVariants({ variant: 'outline' })}
					>
						Create new Studio
					</Link>
				</CardFooter>
			</Card>
		</main>
	);
}
