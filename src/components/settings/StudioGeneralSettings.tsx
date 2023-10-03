'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LoadingButton } from '@/components/ui/loading-button';
import { toast } from '@/components/ui/use-toast';
import {
	StudioGeneralSettings,
	studioGeneralSettings,
} from '@/lib/validators/studio';
import { zodResolver } from '@hookform/resolvers/zod';
import { Prisma, Studio } from '@prisma/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import SettingsMenuSection from './SettingsMenuSection';

interface StudioGeneralSettingsProps {
	studio: Studio;
}

const StudioGeneralSettings: FC<StudioGeneralSettingsProps> = ({ studio }) => {
	const queryClient = useQueryClient();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<StudioGeneralSettings>({
		resolver: zodResolver(studioGeneralSettings),
		defaultValues: {
			name: studio.name,
			description: studio.description || undefined,
		},
	});
	const { mutate: save, isLoading } = useMutation({
		mutationKey: ['update', 'studio', studio.id],
		mutationFn: async (payload: StudioGeneralSettings) => {
			const prismaInput: Prisma.StudioUpdateArgs = {
				where: { id: studio.id },
				data: { ...payload },
			};
			const { data } = await axios.patch(
				`/api/studio/${studio.id}`,
				prismaInput
			);
			return data;
		},
		onError: (error) => {
			console.log(error);
			return toast({
				title: 'There was an error.',
				description:
					'Could not save the settings. Please try again later.',
				variant: 'destructive',
			});
		},
		onSuccess: (updatedStudio) => {
			queryClient.invalidateQueries({
				queryKey: ['studio'],
			});
			return toast({
				title: 'Success!',
				description: updatedStudio.name + ' has been updated!',
			});
		},
	});
	return (
		<div className='flex flex-col gap-2'>
			<SettingsMenuSection>
				<h2>Display</h2>
				<form
					onSubmit={handleSubmit((data) => save(data))}
					className='flex flex-col gap-4'
				>
					<div>
						<Label htmlFor='name'>
							{errors.name?.message || 'Studio Name'}
						</Label>
						<Input id='name' {...register('name')} />
					</div>
					<div>
						<Label htmlFor='description'>
							{errors.description?.message ||
								'Studio Description'}
						</Label>
						<Input id='description' {...register('description')} />
					</div>
					<LoadingButton
						isLoading={isLoading}
						className='place-self-end'
					>
						Save
					</LoadingButton>
				</form>
			</SettingsMenuSection>
		</div>
	);
};

export default StudioGeneralSettings;
