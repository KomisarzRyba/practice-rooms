'use client';

import MenuSection from '@/components/MenuSection';
import { LoadingButton } from '@/components/ui/loading-button';
import { useUpdateStudioScheduleSettings } from '@/lib/mutations/hooks/mutation';
import { useGetScheduleProperties } from '@/lib/queries/hooks/query';
import {
	StudioScheduleProperties,
	studioScheduleProperties,
} from '@/lib/validators/studio';
import { zodResolver } from '@hookform/resolvers/zod';
import { Studio } from '@prisma/client';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Label } from '../ui/label';

interface StudioDisplaySettingsProps {
	studio: Studio;
}

const StudioScheduleSettings: FC<StudioDisplaySettingsProps> = ({ studio }) => {
	const { data: scheduleProps } = useGetScheduleProperties({
		studioId: studio.id,
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<StudioScheduleProperties>({
		resolver: zodResolver(studioScheduleProperties),
		defaultValues: {
			dayStart: scheduleProps?.dayStart,
			dayEnd: scheduleProps?.dayEnd,
		},
	});
	const { mutate: update, isLoading } = useUpdateStudioScheduleSettings(
		studio.id
	);

	return (
		<div className='flex flex-col gap-2'>
			<MenuSection>
				<h2>Schedule</h2>
				<form
					onSubmit={handleSubmit((data) =>
						update({ ...data, studioId: studio.id })
					)}
					className='flex flex-col gap-4'
				>
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

export default StudioScheduleSettings;
