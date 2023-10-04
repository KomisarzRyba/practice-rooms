import { FC, PropsWithChildren, ReactNode } from 'react';

interface SidebarLayoutProps {
	sidebarContent: ReactNode;
}

const SidebarLayout: FC<PropsWithChildren<SidebarLayoutProps>> = ({
	children,
	sidebarContent,
}) => {
	return (
		<div className='relative w-full'>
			<div className='fixed inset-y-0 left-0 flex flex-col items-end h-screen gap-2 px-6 py-16 w-52 bg-secondary'>
				{sidebarContent}
			</div>
			<div className='pl-52'>{children}</div>
		</div>
	);
};

export default SidebarLayout;
