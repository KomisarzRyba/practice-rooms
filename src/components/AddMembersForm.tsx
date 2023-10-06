import { useAddOrInviteMember } from '@/lib/mutations/hooks/mutation';
import { cn } from '@/lib/tw-utils';
import { NewMember, newMember } from '@/lib/validators/member';
import { zodResolver } from '@hookform/resolvers/zod';
import { Studio } from '@prisma/client';
import { ComponentProps, FC } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { LoadingButton } from './ui/loading-button';

interface AddMembersFormProps extends ComponentProps<'form'> {
	studio: Studio;
}

const AddMembersForm: FC<AddMembersFormProps> = ({
	studio,
	className,
	...props
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty },
		reset,
	} = useForm<NewMember>({
		resolver: zodResolver(newMember),
		defaultValues: {
			studioId: studio.id,
			email: '',
		},
	});
	const { mutate: addMember, isLoading } = useAddOrInviteMember(studio.id);
	return (
		<form
			onSubmit={handleSubmit((data) => {
				addMember(data, {
					onSuccess: () => {
						reset();
					},
				});
			})}
			className={cn('flex flex-col gap-2', className)}
			{...props}
		>
			<Label
				htmlFor='email'
				className={cn(errors.email && 'text-destructive')}
			>
				{errors.email?.message || 'User email'}
			</Label>
			<Input
				type='text'
				id='email'
				placeholder='e.g. svetsvet@gmail.com'
				{...register('email')}
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

export default AddMembersForm;
