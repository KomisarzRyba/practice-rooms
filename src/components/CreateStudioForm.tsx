'use client';

import { cn } from '@/lib/tw-utils';
import { NewStudio, newStudio } from '@/lib/validators/studio';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { string } from 'zod';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { LoadingButton } from './ui/loading-button';
import { toast } from './ui/use-toast';
import { useCreateRoom, useCreateStudio } from '@/lib/mutations/hooks/mutation';

const CreateStudioForm: FC = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<NewStudio>({
		resolver: zodResolver(newStudio),
	});
	const { mutate: createStudio, isLoading } = useCreateStudio();
	return (
		<form
			onSubmit={handleSubmit((data) => createStudio(data))}
			className='flex flex-col w-full h-full gap-4'
		>
			<div>
				<Label
					htmlFor='name'
					className={cn(errors.name && 'text-destructive')}
				>
					{errors.name?.message || 'Name'}
				</Label>
				<Input
					type='text'
					id='name'
					placeholder="e.g. UNCSA Percussion, KK's Piano Studio..."
					{...register('name')}
				/>
			</div>
			<div>
				<Label htmlFor='description'>Description</Label>
				<Input
					type='text'
					id='description'
					placeholder='e.g. Daily practice and rehearsal space of the voice department'
					{...register('description')}
				/>
			</div>
			<LoadingButton
				isLoading={isLoading}
				size='lg'
				className='place-self-end'
			>
				Continue
			</LoadingButton>
		</form>
	);
};

export default CreateStudioForm;
