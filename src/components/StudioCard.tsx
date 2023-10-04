import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/tw-utils';
import { BackpackIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { FC, HTMLAttributes } from 'react';
import CreatorSymbol from './CreatorSymbol';

interface StudioCardProps extends HTMLAttributes<HTMLDivElement> {
	id: string;
	name: string;
	description: string | null;
	createdByUser?: boolean;
}
const StudioCard: FC<StudioCardProps> = ({
	id,
	name,
	description,
	createdByUser,
	className,
	...props
}) => {
	return (
		<Link href={`/studio/${id}`}>
			<Card
				className={cn(
					'transition-colors hover:bg-secondary',
					className
				)}
				{...props}
			>
				<CardHeader>
					<CardTitle className='flex items-center gap-2'>
						{name}
						{createdByUser && <CreatorSymbol />}
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
