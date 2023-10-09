import { cn } from '@/lib/tw-utils';
import { Room } from '@prisma/client';
import { ComponentProps, FC, PropsWithChildren } from 'react';

interface RoomCardProps extends Pick<Room, 'name'>, ComponentProps<'div'> {}

const RoomCard: FC<PropsWithChildren<RoomCardProps>> = ({
	name,
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
					<h2 className='text-lg'>{name}</h2>
				</div>
				{children}
			</div>
		</div>
	);
};

export default RoomCard;
