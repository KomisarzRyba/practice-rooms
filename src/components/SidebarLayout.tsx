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
			<div className='fixed inset-y-0 left-0 flex flex-col items-end w-48 h-screen gap-4 px-8 py-16 min-w-fit bg-secondary'>
				{sidebarContent}
			</div>
			<div className='pl-48'>{children}</div>
		</div>
	);
};

export default SidebarLayout;
