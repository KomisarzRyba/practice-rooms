import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { ValueNoneIcon } from '@radix-ui/react-icons';
import { FC } from 'react';
import StudioCard from './StudioCard';

const UserWorkspaces: FC = async () => {
	const session = await getAuthSession();
	const studios = await db.studio.findMany({
		where: {
			OR: [
				{
					creatorId: session?.user.id,
				},
				{
					members: {
						every: {
							id: session?.user.id,
						},
					},
				},
			],
		},
	});
	if (!studios) {
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
	console.log(studios);
	return (
		<>
			{studios.map((w, i) => {
				return (
					<StudioCard
						key={i}
						id={w.id}
						name={w.name}
						description={w.description}
						createdByUser={session?.user.id === w.creatorId}
					/>
				);
			})}
		</>
	);
};

export default UserWorkspaces;
