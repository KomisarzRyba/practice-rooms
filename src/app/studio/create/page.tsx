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
		<main className='container py-8'>
			<Card>
				<CardHeader>
					<CardTitle className='flex gap-2'>
						<DashboardIcon />
						New Studio
					</CardTitle>
					<CardDescription>
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
