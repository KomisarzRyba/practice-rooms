'use client';

import BookingCalendar from '@/components/calendar/BookingCalendar';
import { Skeleton } from '@/components/ui/skeleton';
import {
	useGetMembersWithCreator,
	useGetStudio,
} from '@/lib/queries/hooks/query';
import { DotFilledIcon } from '@radix-ui/react-icons';
import { FC } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

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
				<h2 className='text-2xl'>Signouts</h2>
				<BookingCalendar />
			</section>
		</main>
	);
};

export default StudioPage;
