import UserPendingStudios from '@/components/UserPendingStudios';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { getAuthSession } from '@/lib/auth';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { redirect } from 'next/navigation';
import { FC } from 'react';

const CreateWorkspacePage: FC = async () => {
	const session = await getAuthSession();
	if (!session?.user) redirect('/api/auth/signIn');

	return (
		<main className='container flex flex-col items-center py-8'>
			<Card className='w-full max-w-6xl'>
				<CardHeader>
					<CardTitle className='flex gap-2 text-2xl'>
						<PlusCircledIcon className='w-8 h-8' />
						Join Studios
					</CardTitle>
					<CardDescription className='text-lg'>
						The Studios you have been invited to will appear here.
					</CardDescription>
				</CardHeader>
				<CardContent className='flex justify-center'>
					<div className='flex flex-col w-full max-w-4xl gap-2'>
						<UserPendingStudios />
					</div>
				</CardContent>
			</Card>
		</main>
	);
};

export default CreateWorkspacePage;
