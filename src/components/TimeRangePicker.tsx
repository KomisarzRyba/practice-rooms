import { Studio } from '@prisma/client';
import { FC } from 'react';
import { TimePicker } from './TimePicker';
import { InputProps } from './ui/input';
import { useGetScheduleProperties } from '@/lib/queries/hooks/query';
import { format } from 'date-fns';
import { Skeleton } from './ui/skeleton';

interface TimeRangePickerProps {
	studio: Studio;
	startFieldProps?: InputProps;
	endFieldProps?: InputProps;
}

export const TimeRangePicker: FC<TimeRangePickerProps> = ({
	studio,
	startFieldProps,
	endFieldProps,
}) => {
	const { data: scheduleProps } = useGetScheduleProperties({
		studioId: studio.id,
	});
	if (!scheduleProps) {
		return <Skeleton className='w-full h-8' />;
	}
	return (
		<div className='flex items-center gap-2'>
			<TimePicker
				options={['06:00', '08:00']}
				defaultValue={format(scheduleProps?.dayStart, 'HH:mm')}
				className='bg-card'
				{...startFieldProps}
			/>
			<span className='text-muted-foreground'>to</span>
			<TimePicker
				options={['21:00', '00:00']}
				defaultValue={format(scheduleProps?.dayEnd, 'HH:mm')}
				className='bg-card'
				{...endFieldProps}
			/>
		</div>
	);
};
