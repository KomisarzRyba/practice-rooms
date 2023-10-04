import { cn } from '@/lib/tw-utils';
import { ComponentProps, FC, PropsWithChildren } from 'react';

const MenuSection: FC<PropsWithChildren<ComponentProps<'div'>>> = ({
	children,
	className,
	...props
}) => {
	return (
		<div
			className={cn(
				'px-3 py-2 space-y-2 rounded-lg border bg-secondary text-secondary-foreground',
				'[&>h2]:text-lg [&>h2]:font-medium',
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
};

export default MenuSection;
