'use client';

import DayView from '@/components/scheduler/DayView';
import { Skeleton } from '@/components/ui/skeleton';
import {
	useGetMembersWithCreator,
	useGetStudio,
} from '@/lib/queries/hooks/query';
import { DotFilledIcon } from '@radix-ui/react-icons';
import { FC } from 'react';

interface StudioPageProps {
	params: {
		id: string;
	};
}

const StudioPage: FC<StudioPageProps> = ({ params }) => {
	const { id } = params;
	const { data: studio, isLoading } = useGetStudio({
		studioId: id,
	});
	const { data: membersWithCreator } = useGetMembersWithCreator({
		studioId: id,
	});
	if (isLoading) {
		return (
			<main className='container py-8'>
				<div className='flex flex-col gap-4'>
					<Skeleton className='w-[75%] h-10' />
					<Skeleton className='w-[50%] h-6' />
				</div>
			</main>
		);
	}
	return (
		<main className='container flex flex-col gap-4 py-8'>
			<header className='flex flex-col gap-2'>
				<h1 className='text-4xl'>{studio?.name}</h1>
				<div className='flex items-center gap-2 text-lg text-muted-foreground'>
					<span>{studio?.description}</span>
					<DotFilledIcon />
					{membersWithCreator?.creator.name ? (
						<span>
							Created by {membersWithCreator?.creator.name}
						</span>
					) : (
						<Skeleton className='w-32 h-4' />
					)}
				</div>
			</header>
			<section className='flex flex-col gap-2'>
				<h2 className='text-2xl'>This week&apos;s schedule</h2>
				<DayView studioId={id} />
			</section>
		</main>
	);
};

export default StudioPage;
