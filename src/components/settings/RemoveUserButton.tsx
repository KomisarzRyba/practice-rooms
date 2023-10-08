import { FC } from 'react';
import { LoadingButton } from '../ui/loading-button';
import { useRemoveFromStudio } from '@/lib/mutations/hooks/mutation';

interface RemoveUserButtonProps {
	studioId: string;
	userId: string;
}

const RemoveUserButton: FC<RemoveUserButtonProps> = ({ studioId, userId }) => {
	const { mutate: remove, isLoading } = useRemoveFromStudio(studioId);

	return (
		<LoadingButton
			variant='destructive'
			isLoading={isLoading}
			onClick={() => remove({ studioId, userId })}
		>
			Remove
		</LoadingButton>
	);
};

export default RemoveUserButton;
