import { cn } from '@/lib/tw-utils';
import { User } from '@prisma/client';
import { ComponentProps, FC, PropsWithChildren } from 'react';
import CreatorSymbol from './CreatorSymbol';
import UserAvatar from './UserAvatar';

interface MemberCardProps
	extends Pick<User, 'id' | 'name' | 'image'>,
		Omit<ComponentProps<'div'>, 'id'> {
	isCreator?: boolean;
}

const MemberCard: FC<PropsWithChildren<MemberCardProps>> = ({
	id,
	name,
	image,
	isCreator,
	className,
	children,
	...props
}) => {
	return (
		<div
			className={cn('rounded-xl border px-4 py-3', className)}
			{...props}
		>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-4'>
					<UserAvatar user={{ name, image }} />
					<h2 className='text-lg'>{name}</h2>
					<span className='text-xs text-muted-foreground'>
						{isCreator ? 'creator' : 'member'}
					</span>
					{isCreator && <CreatorSymbol className='text-2xl' />}
				</div>
				{children}
			</div>
		</div>
	);
};

export default MemberCard;
