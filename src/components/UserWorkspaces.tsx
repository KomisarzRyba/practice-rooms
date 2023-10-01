import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { ValueNoneIcon } from '@radix-ui/react-icons';
import { FC } from 'react';
import WorkspaceCard from './WorkspaceCard';

const UserWorkspaces: FC = async () => {
	const session = await getAuthSession();
	const user = await db.user.findUnique({
		where: {
			id: session?.user.id,
		},
		include: {
			workspacesCreated: true,
			workspacesJoined: true,
		},
	});
	if (
		user?.workspacesJoined.length === 0 &&
		user?.workspacesCreated.length === 0
	)
		return (
			<div className='w-full px-4 py-2 border rounded-lg bg-secondary'>
				<div className='flex items-center gap-4'>
					<ValueNoneIcon className='w-8 h-8' />
					<div>
						<h2 className='text-xl'>Oopsie...</h2>
						<p className='text-sm font-normal'>
							You are not a member of any Workspace.
						</p>
						<p className='text-sm font-normal'>
							Choose an option below to join or create one!
						</p>
					</div>
				</div>
			</div>
		);
	return (
		<>
			{user!.workspacesCreated.map((w) => {
				<WorkspaceCard
					id={w.id}
					name={w.name}
					description={w.description}
				/>;
			})}
			{user!.workspacesJoined.map((w) => {
				<WorkspaceCard
					id={w.id}
					name={w.name}
					description={w.description}
				/>;
			})}
		</>
	);
};

export default UserWorkspaces;
