import { cn } from '@/lib/tw-utils';
import { ComponentProps, FC } from 'react';

const CreatorSymbol: FC<ComponentProps<'span'>> = ({ className, ...props }) => {
	return (
		<span
			className={cn(
				'text-2xl select-none cursor-default -translate-y-0.5',
				className
			)}
			{...props}
		>
			👑
		</span>
	);
};

export default CreatorSymbol;
