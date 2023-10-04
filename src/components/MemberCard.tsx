import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { User } from '@prisma/client';
import { ComponentProps, FC } from 'react';
import UserAvatar from './UserAvatar';
import { cn } from '@/lib/tw-utils';
import CreatorSymbol from './CreatorSymbol';

interface MemberCardProps
	extends Pick<User, 'id' | 'name' | 'image'>,
		Omit<ComponentProps<'div'>, 'id'> {
	isCreator?: boolean;
}

const MemberCard: FC<MemberCardProps> = ({
	id,
	name,
	image,
	isCreator,
	className,
	...props
}) => {
	return (
		<div className={cn('rounded-xl border p-4', className)} {...props}>
			<div className='flex items-center gap-4'>
				<UserAvatar user={{ name, image }} />
				<h2 className='text-lg'>{name}</h2>
				<span className='text-xs text-muted-foreground'>
					{isCreator ? 'creator' : 'member'}
				</span>
				{isCreator && <CreatorSymbol className='text-2xl' />}
			</div>
		</div>
	);
};

export default MemberCard;
