import { useGetStudioRooms } from '@/lib/queries/hooks/query';
import { Studio } from '@prisma/client';
import { FC } from 'react';
import AddRoomsForm from '../AddRoomsForm';
import MenuSection from '../MenuSection';
import RoomCard from '../RoomCard';
import { Button } from '../ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../ui/dialog';
import DeleteRoomButton from './DeleteRoomButton';

interface StudioRoomsSettingsProps {
	studio: Studio;
}

const StudioRoomsSettings: FC<StudioRoomsSettingsProps> = ({ studio }) => {
	const { data: rooms, isLoading } = useGetStudioRooms({
		studioId: studio.id,
	});
	return (
		<div className='flex flex-col gap-4'>
			<MenuSection>
				<h2>Practice Rooms</h2>
				<div className='flex flex-col gap-2'>
					{rooms?.map((room, i) => {
						return (
							<RoomCard
								key={i}
								name={room.name}
								className='-mx-3 rounded-none border-x-0 border-y bg-card'
							>
								<DeleteRoomButton roomId={room.id} />
							</RoomCard>
						);
					})}
					<Dialog>
						<DialogTrigger asChild>
							<Button className='place-self-end'>
								Add Rooms
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>
									Add Rooms to {studio.name}
								</DialogTitle>
								<DialogDescription>
									Members will gain immediate access to this
									room&apos;s schedule.
								</DialogDescription>
							</DialogHeader>
							<AddRoomsForm studio={studio} />
						</DialogContent>
					</Dialog>
				</div>
			</MenuSection>
		</div>
	);
};

export default StudioRoomsSettings;
