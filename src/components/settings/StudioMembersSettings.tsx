import { Studio } from '@prisma/client';
import { FC } from 'react';
import MenuSection from '../MenuSection';

interface StudioMembersSettingsProps {
	studio: Studio;
}

const StudioMembersSettings: FC<StudioMembersSettingsProps> = ({ studio }) => {
	return (
		<div className='flex flex-col gap-2'>
			<MenuSection>
				<h2>Members</h2>
			</MenuSection>
		</div>
	);
};

export default StudioMembersSettings;
