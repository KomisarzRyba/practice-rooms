import { Studio } from '@prisma/client';
import { FC } from 'react';
import MenuSection from '../MenuSection';
import { useGetMembersWithCreator } from '@/lib/queries/hooks/query';
import MemberCard from '../MemberCard';
import { Button } from '../ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../ui/dialog';
import AddMembersForm from '../AddMembersForm';

interface StudioMembersSettingsProps {
	studio: Studio;
}

const StudioMembersSettings: FC<StudioMembersSettingsProps> = ({ studio }) => {
	const { data: membersWithCreator } = useGetMembersWithCreator({
		studioId: studio.id,
	});
	return (
		<div className='flex flex-col gap-4'>
			<MenuSection>
				<h2>Members</h2>
				<div className='flex flex-col gap-2'>
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
					<Dialog>
						<DialogTrigger asChild>
							<Button className='place-self-end'>
								Add Members
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>
									Add Members to {studio.name}
								</DialogTitle>
								<DialogDescription>
									Added users will gain immediate access to
									this studio&apos;s resources, including
									schedules, and other members&apos; info.
								</DialogDescription>
							</DialogHeader>
							<AddMembersForm studio={studio} />
						</DialogContent>
					</Dialog>
				</div>
			</MenuSection>
		</div>
	);
};

export default StudioMembersSettings;
