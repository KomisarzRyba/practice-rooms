'use client';

import Link, { LinkProps } from 'next/link';
import { FC, PropsWithChildren, useState } from 'react';
import { buttonVariants } from './ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/tw-utils';

interface SidebarLinkProps extends LinkProps {}

const SidebarLink: FC<PropsWithChildren<SidebarLinkProps>> = ({
	children,
	href,
	...props
}) => {
	const pathname = usePathname();
	const active = pathname === href;
	return (
		<Link
			href={href}
			className={buttonVariants({
				variant: 'link',
				className: cn(
					'gap-2 group',
					active && 'underline pointer-events-none'
				),
			})}
			{...props}
		>
			{children}
		</Link>
	);
};

export default SidebarLink;
