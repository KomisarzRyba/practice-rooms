import CreateStudioForm from '@/components/CreateStudioForm';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { getAuthSession } from '@/lib/auth';
import { DashboardIcon } from '@radix-ui/react-icons';
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
						<DashboardIcon className='w-8 h-8' />
						Create a Studio
					</CardTitle>
					<CardDescription className='text-lg'>
						You can edit this information later.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<CreateStudioForm />
				</CardContent>
			</Card>
		</main>
	);
};

export default CreateWorkspacePage;
