'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { useGetStudio } from '@/lib/queries/hooks/query';
import { FC } from 'react';

interface StudioPageProps {
	params: {
		id: string;
	};
}

const StudioPage: FC<StudioPageProps> = ({ params }) => {
	const { id } = params;
	const { data: studio, isLoading } = useGetStudio({ studioId: id });
	return (
		<main className='container py-8'>
			{studio?.name || <Skeleton className='w-full h-4' />}
			<br />
			{isLoading ? (
				<Skeleton className='w-full h-4' />
			) : (
				studio?.description
			)}
		</main>
	);
};

export default StudioPage;
