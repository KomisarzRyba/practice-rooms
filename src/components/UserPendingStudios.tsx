'use client';

import { useGetPendingStudios } from '@/lib/queries/hooks/query';
import { ValueNoneIcon } from '@radix-ui/react-icons';
import { useSession } from 'next-auth/react';
import { ComponentProps, FC } from 'react';
import StudioInviteCard from './StudioInviteCard';
import { Skeleton } from './ui/skeleton';

const UserWorkspaces: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
	const { data: session } = useSession();
	const { data: studios, isLoading } = useGetPendingStudios();

	if (!isLoading && (!studios || studios.length === 0)) {
		return (
			<div className='w-full px-4 py-2 border rounded-lg bg-secondary'>
				<div className='flex items-center gap-4'>
					<ValueNoneIcon className='w-8 h-8' />
					<div>
						<h2 className='text-xl'>Oopsie...</h2>
						<p className='text-sm font-normal'>
							You are not a invited to any Studio.
						</p>
						<p className='text-sm font-normal'>
							Sorry, not sorry...
						</p>
					</div>
				</div>
			</div>
		);
	}
	return (
		<>
			{!isLoading ? (
				studios!.map((studio, i) => {
					return (
						<StudioInviteCard
							key={i}
							id={studio.id}
							name={studio.name}
							description={studio.description}
							createdByUser={
								session?.user.id === studio.creatorId
							}
							className={className}
							{...props}
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
