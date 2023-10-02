import { FC } from 'react';
import UserAccountMenu from './UserAccountMenu';
import { getAuthSession } from '@/lib/auth';
import UserAvatar from './UserAvatar';
import Link from 'next/link';

const Header: FC = async () => {
	const session = await getAuthSession();
	return (
		<div className='sticky inset-x-0 top-0 z-10 py-2 border-b bg-background'>
			<div className='container flex items-center justify-between h-full'>
				<Link href='/'>Go Practice</Link>
				{session?.user ? (
					<UserAccountMenu user={session.user} />
				) : (
					<UserAvatar />
				)}
			</div>
		</div>
	);
};

export default Header;
