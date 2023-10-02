import StudioSettingsMenu from '@/components/StudioSettingsMenu';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { db } from '@/lib/db';
import { GearIcon } from '@radix-ui/react-icons';
import { FC } from 'react';

interface StudioSettingsPageProps {
	params: {
		id: string;
	};
}

const StudioSettingsPage: FC<StudioSettingsPageProps> = async ({ params }) => {
	const { id } = params;
	const studio = await db.studio.findUnique({
		where: {
			id,
		},
	});
	return (
		<main className='container py-8'>
			<Card>
				<CardHeader>
					<CardTitle className='flex items-center gap-2 text-2xl'>
						<GearIcon className='w-6 h-6' />
						Settings
					</CardTitle>
					<CardDescription>for {studio?.name}</CardDescription>
				</CardHeader>
				<CardContent>
					<StudioSettingsMenu studio={studio!} />
				</CardContent>
				<CardFooter></CardFooter>
			</Card>
		</main>
	);
};

export default StudioSettingsPage;
