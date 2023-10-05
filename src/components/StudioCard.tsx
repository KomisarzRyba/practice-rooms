import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/tw-utils';
import Link from 'next/link';
import { FC, HTMLAttributes } from 'react';
import CreatorSymbol from './CreatorSymbol';
import { useGetMembersWithCreator } from '@/lib/queries/hooks/query';

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
	const { data } = useGetMembersWithCreator({ studioId: id });
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
					<CardTitle className='flex items-center gap-2 text-xl'>
						{name}
						{createdByUser && <CreatorSymbol />}
					</CardTitle>
					{description && (
						<CardDescription>{description}</CardDescription>
					)}
				</CardHeader>
				<CardContent>
					<div className='flex gap-4'>
						<h3 className='font-medium shrink-0'>Members:</h3>
						<div className='flex flex-wrap'>
							{data?.members?.map((member, i) => {
								return (
									<span
										key={i}
										className='mx-2 text-muted-foreground'
									>
										{member.name}
									</span>
								);
							})}
						</div>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
};

export default StudioCard;
