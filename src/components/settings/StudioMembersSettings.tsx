import { Studio } from '@prisma/client';
import { FC } from 'react';
import MenuSection from '../MenuSection';
import { useGetMembersWithCreator } from '@/lib/queries/hooks/query';
import MemberCard from '../MemberCard';
import { Button } from '../ui/button';

interface StudioMembersSettingsProps {
	studio: Studio;
}

const StudioMembersSettings: FC<StudioMembersSettingsProps> = ({ studio }) => {
	const { data: membersWithCreator } = useGetMembersWithCreator({
		studioId: studio.id,
	});
	return (
		<div className='flex flex-col gap-2'>
			<MenuSection>
				<h2>Members</h2>
				<div className='flex flex-col gap-1'>
					{membersWithCreator?.members.map((member, i) => {
						const isCreator =
							studio.creatorId === membersWithCreator.creator.id;
						return (
							<MemberCard
								key={i}
								{...member}
								className='-mx-3 rounded-none border-x-0 border-y-[1px] bg-card'
								isCreator={isCreator}
							>
								{!isCreator && (
									<Button variant='destructive'>
										Remove
									</Button>
								)}
							</MemberCard>
						);
					})}
					<Button className='place-self-end'>Add Members</Button>
				</div>
			</MenuSection>
		</div>
	);
};

export default StudioMembersSettings;
