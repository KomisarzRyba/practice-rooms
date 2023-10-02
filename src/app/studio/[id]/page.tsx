import { db } from '@/lib/db';
import { FC } from 'react';

interface StudioPageProps {
	params: {
		id: string;
	};
}

const StudioPage: FC<StudioPageProps> = async ({ params }) => {
	const { id } = params;
	const studio = await db.studio.findUnique({
		where: {
			id,
		},
	});
	return (
		<main className='container py-8'>
			{studio?.name}
			<br />
			{studio?.description}
		</main>
	);
};

export default StudioPage;
