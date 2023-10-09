'use client';

import MemberCard from '@/components/MemberCard';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import {
	useGetMembersWithCreator,
	useGetStudio,
} from '@/lib/queries/hooks/query';
import { GearIcon, PersonIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { FC } from 'react';

interface MembersPageProps {
	params: {
		id: string;
	};
}

const MembersPage: FC<MembersPageProps> = ({ params }) => {
	const { id } = params;
	const { data: studio } = useGetStudio({ studioId: id });
	const { data: membersWithCreator } = useGetMembersWithCreator({
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
						<div className='overflow-hidden rounded-md'>
							{membersWithCreator.members.map((member, i) => {
								return (
									<MemberCard
										key={i}
										id={member.id}
										name={member.name}
										image={member.image}
										isCreator={
											member.id ===
											membersWithCreator.creator.id
										}
										className='rounded-none bg-secondary text-secondary-foreground'
									/>
								);
							})}
						</div>
					) : (
						<Skeleton className='w-full h-48' />
					)}
				</CardContent>
			</Card>
		</main>
	);
};

export default MembersPage;
