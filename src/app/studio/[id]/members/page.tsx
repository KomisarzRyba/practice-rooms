'use client';

import MemberCard from '@/components/MemberCard';
import MenuSection from '@/components/MenuSection';
import StudioGeneralSettings from '@/components/settings/StudioGeneralSettings';
import { buttonVariants } from '@/components/ui/button';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetMembers, useGetStudio } from '@/lib/queries/hooks/query';
import { GearIcon, PersonIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { FC } from 'react';

interface ManageMembersPageProps {
	params: {
		id: string;
	};
}

const ManageMembersPage: FC<ManageMembersPageProps> = ({ params }) => {
	const { id } = params;
	const { data: studio } = useGetStudio({ studioId: id });
	const { data: membersWithCreator } = useGetMembers({
		studioId: id,
	});
	return (
		<main className='container flex flex-col items-center py-8'>
			<Card className='w-full max-w-4xl'>
				<CardHeader>
					<CardTitle className='flex items-center justify-between w-full'>
						<div className='flex items-center gap-2 text-2xl'>
							<PersonIcon className='w-6 h-6' />
							Members{' '}
							<span className='font-light'>
								-{' '}
								{studio?.name || (
									<Skeleton className='inline-block w-48 h-6 place-self-stretch' />
								)}
							</span>
						</div>
						<Link
							href={`/studio/${id}/settings/members`}
							className={buttonVariants({
								variant: 'ghost',
								size: 'icon',
							})}
						>
							<GearIcon className='w-6 h-6' />
						</Link>
					</CardTitle>
				</CardHeader>
				<CardContent>
					{membersWithCreator ? (
						membersWithCreator.members.map((member, i) => {
							return (
								<MemberCard
									key={i}
									{...member}
									isCreator={
										member.id ===
										membersWithCreator.creator.id
									}
									className='bg-secondary text-secondary-foreground'
								/>
							);
						})
					) : (
						<Skeleton className='w-full h-48' />
					)}
				</CardContent>
			</Card>
		</main>
	);
};

export default ManageMembersPage;