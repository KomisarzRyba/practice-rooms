import { getAuthSession } from '@/lib/auth';
import { FC } from 'react';
import WorkspaceCard from './WorkspaceCard';
import { db } from '@/lib/db';

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
