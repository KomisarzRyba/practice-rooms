import SidebarLayout from '@/components/SidebarLayout';
import SidebarLink from '@/components/SidebarLink';
import { GearIcon, HomeIcon, PersonIcon } from '@radix-ui/react-icons';
import { FC, PropsWithChildren } from 'react';

interface StudioLayoutProps {
	params: {
		id: string;
	};
}

const StudioLayout: FC<PropsWithChildren<StudioLayoutProps>> = ({
	children,
	params,
}) => {
	const { id } = params;
	return (
		<SidebarLayout
			sidebarContent={
				<>
					<SidebarLink
						href={`/studio/${id}`}
						label='Studio Home'
						decoration={<HomeIcon />}
					/>
					<SidebarLink
						href={`/studio/${id}/members`}
						label='Members'
						decoration={<PersonIcon />}
					/>
					<SidebarLink
						href={`/studio/${id}/settings`}
						label='Settings'
						decoration={
							<GearIcon className='group-hover:animate-spin' />
						}
					>
						<SidebarLink
							href={`/studio/${id}/settings/general`}
							label='General'
						/>
						<SidebarLink
							href={`/studio/${id}/settings/rooms`}
							label='Manage Rooms'
						/>
						<SidebarLink
							href={`/studio/${id}/settings/members`}
							label='Manage Members'
						/>
					</SidebarLink>
				</>
			}
		>
			{children}
		</SidebarLayout>
	);
};

export default StudioLayout;
