import { FC } from 'react';

interface DayViewProps {
	studioId: string;
}

const studio = {
	rooms: [
		{
			name: 'Office',
		},
		{
			name: 'Room 102',
		},
	],
};

const studioScheduleInfo = {
	dayStart: 6,
	dayEnd: 0,
};

const getTimeSlotCount = () =>
	(studioScheduleInfo.dayEnd || 24) - studioScheduleInfo.dayStart;

const day = [
	{
		start: 9,
		end: 13,
		owner: {
			name: 'Antek Olesik',
		},
		room: {
			id: 1,
		},
	},
];

const DayView: FC<DayViewProps> = ({ studioId }) => {
	return (
		<div
			// className={cn(
			// 	'grid',
			// 	`grid-cols-[${
			// 		((studioScheduleInfo.dayEnd || 24) -
			// 			studioScheduleInfo.dayStart) /
			// 		studioScheduleInfo.timeSlotSizeH
			// 	}]`,
			// 	`grid-rows-[${studio.rooms.length}]`
			// )}
			className='flex flex-col'
		>
			<HeadRow />
			{studio.rooms.map((room, i) => {
				return <RoomRow key={i} />;
			})}
		</div>
	);
};

export default DayView;

const HeadRow: FC = () => {
	return (
		<div className='flex'>
			<div className='w-32 h-12' />
			{[...Array(getTimeSlotCount())].map((_, i) => {
				return (
					<div key={i} className='w-12 h-12 border'>
						{studioScheduleInfo.dayStart + i}
					</div>
				);
			})}
		</div>
	);
};

const RoomRow: FC = () => {
	return (
		<div className='flex'>
			<div className='w-32 h-12 border border-r-2'>Room Name</div>
			{[...Array(getTimeSlotCount())].map((_, i) => {
				return <div key={i} className='w-12 h-12 border'></div>;
			})}
		</div>
	);
};
