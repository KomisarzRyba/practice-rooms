import StudioSettingsMenu from '@/components/menu/StudioSettingsMenu';
import {
	Card,
	CardContent,
	CardDescription,
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
		include: {
			rooms: true,
		},
	});
	return (
		<main className='container flex flex-col items-center py-8'>
			<Card className='w-full max-w-4xl'>
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
			</Card>
		</main>
	);
};

export default StudioSettingsPage;
