'use client';

import { Prisma, Room, Studio } from '@prisma/client';
import { PlusIcon, ViewNoneIcon } from '@radix-ui/react-icons';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Dispatch, FC, SetStateAction, useCallback, useState } from 'react';
import { Button } from '../ui/button';
import { LoadingButton } from '../ui/loading-button';
import SettingsMenuSection from './SettingsMenuSection';

interface StudioSettingsMenuProps {
	studio: Studio & { rooms: Room[] };
}

type StudioSettings = Studio & {
	rooms: Prisma.RoomCreateManyStudioInput[];
};

const StudioSettingsMenu: FC<StudioSettingsMenuProps> = ({ studio }) => {
	const [settings, setSettings] = useState<StudioSettings>(studio);
	const { mutate: save, isLoading } = useMutation({
		mutationFn: async (payload: StudioSettings) => {
			const { data } = await axios.patch(`/api/studio`, payload);
			//validate
			return data;
		},
	});
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex flex-col gap-2'>
				<SettingsMenuSection>
					<h2>General Availability Range</h2>
				</SettingsMenuSection>
				<SettingsMenuSection>
					<h2>Practice Rooms</h2>
					<PracticeRoomeMenuList
						settings={settings}
						setSettings={setSettings}
					/>
				</SettingsMenuSection>
			</div>
			<LoadingButton
				size='lg'
				className='place-self-start'
				isLoading={isLoading}
				onClick={() => save(settings)}
			>
				Save
			</LoadingButton>
		</div>
	);
};

export default StudioSettingsMenu;

interface PracticeRoomeMenuListProps {
	settings: StudioSettings;
	setSettings: Dispatch<SetStateAction<StudioSettings>>;
}

const PracticeRoomeMenuList: FC<PracticeRoomeMenuListProps> = ({
	settings,
	setSettings,
}) => {
	const getUpdateRoom = useCallback(
		(index: number) => {
			return (updatedRoom: Prisma.RoomCreateManyStudioInput) => {
				const newRooms = settings.rooms.slice();
				newRooms.splice(index, 1, updatedRoom);
				setSettings({
					...settings,
					rooms: newRooms,
				});
			};
		},
		[setSettings, settings]
	);
	return (
		<div className='flex flex-col gap-1'>
			{settings.rooms.length === 0 && (
				<div className='w-full px-4 py-2 border rounded-lg bg-background'>
					<div className='flex items-center gap-4'>
						<ViewNoneIcon className='w-8 h-8' />
						<div>
							<h2 className='text-xl'>No rooms in here?</h2>
							<p className='text-sm font-normal'>
								Is this what I pay $50k in tuition for?!
							</p>
							<p className='text-sm font-normal'>
								Press the + button below to add a Practice Room.
							</p>
						</div>
					</div>
				</div>
			)}
			{settings.rooms.map((r, i) => {
				return (
					<PracticeRoomListItem
						key={i}
						room={r}
						updateRoom={getUpdateRoom(i)}
					/>
				);
			})}
			<Button
				variant='outline'
				className='place-self-end hover:bg-background'
				onClick={() => {
					setSettings({
						...settings,
						rooms: [
							...settings.rooms,
							{ name: 'New Practice Room' },
						],
					});
				}}
			>
				<PlusIcon />
			</Button>
		</div>
	);
};

interface PracticeRoomListItemProps {
	room: Omit<Room, 'id' | 'studioId'>;
	updateRoom: (room: Prisma.RoomCreateManyStudioInput) => void;
}

const PracticeRoomListItem: FC<PracticeRoomListItemProps> = ({
	room,
	updateRoom,
}) => {
	return (
		<div className='flex justify-between w-full h-full gap-2 p-2 border rounded-md bg-background'>
			<input
				className='border-b'
				type='text'
				value={room.name}
				onChange={(e) => updateRoom({ name: e.target.value })}
			/>
		</div>
	);
};
