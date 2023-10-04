'use client';

import { useGetMembers } from '@/lib/queries/hooks/query';
import { FC } from 'react';

interface ManageMembersPageProps {
	params: {
		id: string;
	};
}

const ManageMembersPage: FC<ManageMembersPageProps> = ({ params }) => {
	const { id } = params;
	const { data: membersWithCreator } = useGetMembers({
		studioId: id,
		withCreator: true,
	});
	console.log(membersWithCreator);
	return (
		<main>
			{membersWithCreator?.members?.map((m, i) => {
				return m.name;
			})}
		</main>
	);
};

export default ManageMembersPage;
