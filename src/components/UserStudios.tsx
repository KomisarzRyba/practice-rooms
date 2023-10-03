'use client';

import { useGetJoinedStudios } from '@/lib/queries/hooks/query';
import { ValueNoneIcon } from '@radix-ui/react-icons';
import { useSession } from 'next-auth/react';
import { FC } from 'react';
import StudioCard from './StudioCard';
import { Skeleton } from './ui/skeleton';

const UserWorkspaces: FC = () => {
	const { data: session } = useSession();
	const { data: studios, isLoading } = useGetJoinedStudios();

	if (!isLoading && (!studios || studios.length === 0)) {
		return (
			<div className='w-full px-4 py-2 border rounded-lg bg-secondary'>
				<div className='flex items-center gap-4'>
					<ValueNoneIcon className='w-8 h-8' />
					<div>
						<h2 className='text-xl'>Oopsie...</h2>
						<p className='text-sm font-normal'>
							You are not a member of any Studio.
						</p>
						<p className='text-sm font-normal'>
							Choose an option below to join or create one!
						</p>
					</div>
				</div>
			</div>
		);
	}
	return (
		<>
			{!isLoading ? (
				studios!.map((w, i) => {
					return (
						<StudioCard
							key={i}
							id={w.id}
							name={w.name}
							description={w.description}
							createdByUser={session?.user.id === w.creatorId}
						/>
					);
				})
			) : (
				<Skeleton className='w-full h-24 col-span-2' />
			)}
		</>
	);
};

export default UserWorkspaces;
