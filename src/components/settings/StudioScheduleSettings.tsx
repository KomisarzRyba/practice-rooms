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
import { TimeRangePicker } from '../TimeRangePicker';
import { format } from 'date-fns';
import { Label } from '../ui/label';

interface StudioDisplaySettingsProps {
	studio: Studio;
}

const StudioScheduleSettings: FC<StudioDisplaySettingsProps> = ({ studio }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<StudioScheduleProperties>({
		resolver: zodResolver(studioScheduleProperties),
	});
	const { mutate: update, isLoading } = useUpdateStudioScheduleSettings(
		studio.id
	);

	return (
		<div className='flex flex-col gap-2'>
			<MenuSection>
				<h2>Schedule</h2>
				<form
					onSubmit={handleSubmit((data) => {
						update({ ...data, studioId: studio.id });
					})}
					className='flex flex-col gap-4'
				>
					<fieldset>
						<Label>
							{errors.dayEnd?.message ||
								errors.dayStart?.message ||
								"General studio's availability range"}
						</Label>
						<TimeRangePicker
							studio={studio}
							startFieldProps={{ ...register('dayStart') }}
							endFieldProps={{ ...register('dayEnd') }}
						/>
					</fieldset>
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
