'use client';

import MenuSection from '@/components/MenuSection';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LoadingButton } from '@/components/ui/loading-button';
import { useUpdateStudioSettings } from '@/lib/mutations/hooks/mutation';
import {
	StudioGeneralSettings,
	studioGeneralSettings,
} from '@/lib/validators/studio';
import { zodResolver } from '@hookform/resolvers/zod';
import { Studio } from '@prisma/client';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

interface StudioGeneralSettingsProps {
	studio: Studio;
}

const StudioGeneralSettings: FC<StudioGeneralSettingsProps> = ({ studio }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<StudioGeneralSettings>({
		resolver: zodResolver(studioGeneralSettings),
		defaultValues: {
			studioId: studio.id,
			name: studio.name,
			description: studio.description || '',
		},
	});
	const { mutate: save, isLoading } = useUpdateStudioSettings(studio.id);

	return (
		<div className='flex flex-col gap-2'>
			<MenuSection>
				<h2>Display</h2>
				<form
					onSubmit={handleSubmit((data) => save(data))}
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

export default StudioGeneralSettings;
