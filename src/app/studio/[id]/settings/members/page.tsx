'use client';

import StudioGeneralSettings from '@/components/settings/StudioGeneralSettings';
import StudioMembersSettings from '@/components/settings/StudioMembersSettings';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetStudio } from '@/lib/queries/hooks/query';
import { GearIcon } from '@radix-ui/react-icons';
import { FC } from 'react';

interface MembersPageProps {
	params: {
		id: string;
	};
}

const MembersPage: FC<MembersPageProps> = ({ params }) => {
	const { id } = params;
	const { data: studio } = useGetStudio({ studioId: id });

	return (
		<main className='container flex flex-col items-center py-8'>
			<Card className='w-full max-w-4xl'>
				<CardHeader>
					<CardTitle className='flex items-center gap-2 text-2xl'>
						<GearIcon className='w-6 h-6' />
						Settings{' '}
						<span className='font-light'>
							-{' '}
							{studio?.name || (
								<Skeleton className='inline-block w-48 h-6 place-self-stretch' />
							)}
						</span>
					</CardTitle>
					<CardDescription>Manage Members</CardDescription>
				</CardHeader>
				<CardContent>
					{studio ? (
						<StudioMembersSettings studio={studio} />
					) : (
						<Skeleton className='w-full h-48' />
					)}
				</CardContent>
			</Card>
		</main>
	);
};

export default MembersPage;
