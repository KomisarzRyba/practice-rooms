'use client';

import MenuSection from '@/components/MenuSection';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LoadingButton } from '@/components/ui/loading-button';
import { useUpdateStudioDisplaySettings } from '@/lib/mutations/hooks/mutation';
import {
	studioDisplaySettings,
	type StudioDisplaySettings as StudioDisplaySettingsType,
} from '@/lib/validators/studio';
import { zodResolver } from '@hookform/resolvers/zod';
import { Studio } from '@prisma/client';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

interface StudioDisplaySettingsProps {
	studio: Studio;
}

const StudioDisplaySettings: FC<StudioDisplaySettingsProps> = ({ studio }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<StudioDisplaySettingsType>({
		resolver: zodResolver(studioDisplaySettings),
		defaultValues: {
			name: studio.name,
			description: studio.description || '',
		},
	});
	const { mutate: save, isLoading } = useUpdateStudioDisplaySettings(
		studio.id
	);

	return (
		<div className='flex flex-col gap-2'>
			<MenuSection>
				<h2>Display</h2>
				<form
					onSubmit={handleSubmit((data) =>
						save({ ...data, studioId: studio.id })
					)}
					className='flex flex-col gap-4'
				>
					<div>
						<Label htmlFor='name'>
							{errors.name?.message || 'Studio Name'}
						</Label>
						<Input
							id='name'
							{...register('name')}
							className='bg-card'
						/>
					</div>
					<div>
						<Label htmlFor='description'>
							{errors.description?.message ||
								'Studio Description'}
						</Label>
						<Input
							id='description'
							{...register('description')}
							className='bg-card'
						/>
					</div>
					<LoadingButton
						isLoading={isLoading}
						className='place-self-end'
					>
						Save
					</LoadingButton>
				</form>
			</MenuSection>
		</div>
	);
};

export default StudioDisplaySettings;
