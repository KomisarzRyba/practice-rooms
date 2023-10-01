import { Button, ButtonProps } from '@/components/ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';
import { FC } from 'react';

interface LoadingButtonProps extends ButtonProps {
	isLoading?: boolean;
}

export const LoadingButton: FC<LoadingButtonProps> = ({
	isLoading = false,
	children,
	...props
}) => {
	return (
		<Button {...props}>
			{isLoading ? (
				<ReloadIcon className='w-4 h-4 mr-2 animate-spin' />
			) : null}
			{children}
		</Button>
	);
};
