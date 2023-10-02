import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { BackpackIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { FC } from 'react';

interface WorkspaceCardProps {
	id: string;
	name: string;
	description: string | null;
	createdByUser?: boolean;
}
const StudioCard: FC<WorkspaceCardProps> = ({
	id,
	name,
	description,
	createdByUser,
}) => {
	return (
		<Link href={`/studio/${id}`}>
			<Card className='transition-colors hover:bg-secondary'>
				<CardHeader>
					<CardTitle className='flex gap-2'>
						{createdByUser && <BackpackIcon />}
						{name}
					</CardTitle>
					{description && (
						<CardDescription>{description}</CardDescription>
					)}
				</CardHeader>
			</Card>
		</Link>
	);
};

export default StudioCard;
