import SidebarLayout from '@/components/SidebarLayout';
import SidebarLink from '@/components/SidebarLink';
import { buttonVariants } from '@/components/ui/button';
import { GearIcon, HomeIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
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
					<SidebarLink href={`/studio/${id}`}>
						<HomeIcon className='group-hover:animate-bounce' />
						Studio Home
					</SidebarLink>
					<SidebarLink href={`/studio/${id}/settings`}>
						<GearIcon className='group-hover:animate-spin' />
						Settings
					</SidebarLink>
				</>
			}
		>
			{children}
		</SidebarLayout>
	);
};

export default StudioLayout;
