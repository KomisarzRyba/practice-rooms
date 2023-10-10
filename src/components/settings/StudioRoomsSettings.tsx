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
import { Skeleton } from '../ui/skeleton';
import Error from 'next/error';
import { ValueNoneIcon } from '@radix-ui/react-icons';

interface StudioRoomsSettingsProps {
	studio: Studio;
}

const StudioRoomsSettings: FC<StudioRoomsSettingsProps> = ({ studio }) => {
	const { data: rooms, isLoading } = useGetStudioRooms({
		studioId: studio.id,
	});
	if (isLoading) {
		return <Skeleton className='w-full h-16' />;
	}
	if (!rooms) {
		return <Error statusCode={404} />;
	}
	return (
		<div className='flex flex-col gap-4'>
			<MenuSection>
				<h2>Practice Rooms</h2>
				<div className='flex flex-col gap-2'>
					{rooms.length === 0 ? (
						<div className='w-full px-4 py-2 border rounded-lg bg-card'>
							<div className='flex items-center gap-4'>
								<ValueNoneIcon className='w-8 h-8' />
								<div>
									<h2 className='text-xl'>What...?</h2>
									<p className='text-sm font-normal'>
										There seems to be no rooms in this
										studio...
									</p>
									<p className='text-sm font-normal'>
										Add one below!
									</p>
								</div>
							</div>
						</div>
					) : (
						rooms?.map((room, i) => {
							return (
								<RoomCard
									key={i}
									name={room.name}
									className='-mx-3 rounded-none border-x-0 border-y bg-card'
								>
									<DeleteRoomButton roomId={room.id} />
								</RoomCard>
							);
						})
					)}
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
