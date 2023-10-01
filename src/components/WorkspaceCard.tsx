import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { FC } from 'react';

interface WorkspaceCardProps {
	id: string;
	name: string;
	description: string | null;
}

const WorkspaceCard: FC<WorkspaceCardProps> = ({ id, name, description }) => {
	return (
		<Link href={`/workspace/${id}`}>
			<Card className='transition-colors hover:bg-secondary'>
				<CardHeader>
					<CardTitle>{name}</CardTitle>
					{description && (
						<CardDescription>{description}</CardDescription>
					)}
				</CardHeader>
				{/* <CardContent></CardContent> */}
			</Card>
		</Link>
	);
};

export default WorkspaceCard;
