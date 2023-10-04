'use client';

import { cn } from '@/lib/tw-utils';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, PropsWithChildren, ReactNode } from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from './ui/accordion';
import { buttonVariants } from './ui/button';

interface SidebarLinkProps extends LinkProps {
	label: string;
	decoration?: ReactNode;
	className?: string;
}

const SidebarLink: FC<PropsWithChildren<SidebarLinkProps>> = ({
	children,
	label,
	decoration,
	href,
	className,
	...props
}) => {
	const pathname = usePathname();
	const active = href === pathname || href === pathname.split('/').at(-1);
	return !children ? (
		<Link
			href={href}
			className={buttonVariants({
				variant: 'link',
				className: cn(
					'gap-2 group',
					'text-secondary-foreground',
					active && 'underline',
					className
				),
			})}
			{...props}
		>
			{decoration}
			{label}
		</Link>
	) : (
		<Accordion
			type='single'
			value={active ? href.toString() : undefined}
			asChild
		>
			<AccordionItem value={href.toString()} className='border-b-0'>
				<AccordionTrigger className='justify-end py-0 hover:no-underline [&>svg]:hidden'>
					<SidebarLink
						href={href}
						label={label}
						decoration={decoration}
						className={className}
						{...props}
					/>
				</AccordionTrigger>
				<AccordionContent className='text-right'>
					{children}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

export default SidebarLink;
