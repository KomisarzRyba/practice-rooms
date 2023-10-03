import { cn } from '@/lib/tw-utils';
import { ComponentProps, FC, PropsWithChildren } from 'react';

const SettingsMenuSection: FC<PropsWithChildren<ComponentProps<'div'>>> = ({
	children,
	className,
	...props
}) => {
	return (
		<div
			className={cn(
				'px-3 py-2 space-y-2 rounded-lg border',
				'[&>h2]:text-lg [&>h2]:font-medium',
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
};

export default SettingsMenuSection;
