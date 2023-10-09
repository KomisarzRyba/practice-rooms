import { useDeleteRoom } from '@/lib/mutations/hooks/mutation';
import { FC } from 'react';
import { LoadingButton } from '../ui/loading-button';

interface DeleteRoomButtonProps {
	roomId: string;
}

const DeleteRoomButton: FC<DeleteRoomButtonProps> = ({ roomId }) => {
	const { mutate: remove, isLoading } = useDeleteRoom(roomId);

	return (
		<LoadingButton
			variant='destructive'
			isLoading={isLoading}
			onClick={() => remove({ id: roomId })}
		>
			Remove
		</LoadingButton>
	);
};

export default DeleteRoomButton;
