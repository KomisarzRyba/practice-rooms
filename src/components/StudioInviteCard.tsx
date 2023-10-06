import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/tw-utils';
import Link from 'next/link';
import { FC, HTMLAttributes } from 'react';
import CreatorSymbol from './CreatorSymbol';
import { useGetMembersWithCreator } from '@/lib/queries/hooks/query';
import { LoadingButton } from './ui/loading-button';
import { useJoinStudio } from '@/lib/mutations/hooks/mutation';

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
	...props
}) => {
	const { data } = useGetMembersWithCreator({ studioId: id });
	const { mutate: join, isLoading } = useJoinStudio(id);
	return (
		<Card {...props}>
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
					<h3 className='font-medium shrink-0'>Creator:</h3>
					{data?.creator.name}
				</div>
				<div className='flex gap-4'>
					<h3 className='font-medium shrink-0'>Members:</h3>
					<div className='flex flex-wrap'>
						{data?.members.map((member, i) => {
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
			<CardFooter className='justify-end gap-2'>
				<LoadingButton isLoading={isLoading} onClick={() => join()}>
					Join
				</LoadingButton>
				<LoadingButton variant='destructive'>Reject</LoadingButton>
			</CardFooter>
		</Card>
	);
};

export default StudioCard;
