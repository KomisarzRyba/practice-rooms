import { Studio } from '@prisma/client';
import { FC } from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { PlusIcon } from '@radix-ui/react-icons';

interface StudioSettingsMenuProps {
	studio: Studio;
}

const StudioSettingsMenu: FC<StudioSettingsMenuProps> = ({ studio }) => {
	return (
		<>
			<div className='flex flex-col gap-2'>
				<h2>Practice Rooms</h2>
				<div>
					<PracticeRoomMenuItem initialName='Name' />
				</div>
				<Button variant='outline' className='place-self-end'>
					<PlusIcon />
				</Button>
			</div>
		</>
	);
};

export default StudioSettingsMenu;

interface PracticeRoomMenuItemProps {
	initialName: string;
}

const PracticeRoomMenuItem: FC<PracticeRoomMenuItemProps> = ({
	initialName,
}) => {
	return (
		<div className='w-full h-full p-2 border rounded-md'>
			<Input
				className='font-medium w-fit'
				type='text'
				defaultValue={initialName}
			/>
		</div>
	);
};
