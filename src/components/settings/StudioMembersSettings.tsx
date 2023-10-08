import { Studio } from '@prisma/client';
import { FC } from 'react';
import MenuSection from '../MenuSection';
import {
	useGetInvitedUserEmails,
	useGetMembersWithCreator,
} from '@/lib/queries/hooks/query';
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
import { useRemoveFromStudio } from '@/lib/mutations/hooks/mutation';
import { LoadingButton } from '../ui/loading-button';
import RemoveUserButton from './RemoveUserButton';

interface StudioMembersSettingsProps {
	studio: Studio;
}

const StudioMembersSettings: FC<StudioMembersSettingsProps> = ({ studio }) => {
	const { data: membersWithCreator } = useGetMembersWithCreator({
		studioId: studio.id,
	});
	const { data: invitedUserEmails } = useGetInvitedUserEmails({
		studioId: studio.id,
	});
	return (
		<div className='flex flex-col gap-4'>
			<MenuSection>
				<h2>Members</h2>
				<div className='flex flex-col gap-2'>
					{membersWithCreator?.members.map((member, i) => {
						const isCreator = studio.creatorId === member.id;
						return (
							<MemberCard
								key={i}
								id={member.id}
								image={member.image}
								name={member.name}
								className='-mx-3 rounded-none border-x-0 border-y bg-card'
								isCreator={isCreator}
							>
								{!isCreator && (
									<RemoveUserButton
										studioId={studio.id}
										userId={member.id}
									/>
								)}
							</MemberCard>
						);
					})}
					<div className='flex gap-4 px-4 py-3 -mx-3 border-y bg-card'>
						<h3 className='font-medium shrink-0'>Invited users:</h3>
						<div className='flex flex-wrap'>
							{invitedUserEmails?.map((email, i) => {
								return (
									<span
										key={i}
										className='mx-2 text-muted-foreground'
									>
										{email}
									</span>
								);
							})}
						</div>
					</div>
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
