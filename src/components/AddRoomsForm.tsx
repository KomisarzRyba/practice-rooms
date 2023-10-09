import { NewRoom, newRoom } from '@/lib/validators/room';
import { zodResolver } from '@hookform/resolvers/zod';
import { Studio } from '@prisma/client';
import { ComponentProps, FC } from 'react';
import { useForm } from 'react-hook-form';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { cn } from '@/lib/tw-utils';
import { LoadingButton } from './ui/loading-button';
import { useCreateRoom } from '@/lib/mutations/hooks/mutation';

interface AddRoomsFormProps extends ComponentProps<'form'> {
	studio: Studio;
}

const AddRoomsForm: FC<AddRoomsFormProps> = ({
	studio,
	className,
	...props
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty },
		reset,
	} = useForm<NewRoom>({
		resolver: zodResolver(newRoom),
		defaultValues: {
			studioId: studio.id,
			name: '',
		},
	});
	const { mutate: create, isLoading } = useCreateRoom();
	return (
		<form
			onSubmit={handleSubmit((newRoom) =>
				create(newRoom, { onSuccess: () => reset() })
			)}
			className={cn('flex flex-col gap-2', className)}
			{...props}
		>
			<Label
				htmlFor='name'
				className={cn(errors.name && 'text-destructive')}
			>
				{errors.name?.message || 'Room name'}
			</Label>
			<Input
				type='text'
				id='name'
				placeholder="e.g. The nice room, or Joe's office"
				{...register('name')}
			/>
			<LoadingButton
				isLoading={isLoading}
				disabled={!isDirty || isLoading}
				className='place-self-end'
			>
				Add
			</LoadingButton>
		</form>
	);
};

export default AddRoomsForm;
