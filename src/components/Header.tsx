import { FC } from 'react';
import UserAccountMenu from './UserAccountMenu';
import { getAuthSession } from '@/lib/auth';
import UserAvatar from './UserAvatar';

const Header: FC = async () => {
	const session = await getAuthSession();
	return (
		<div className='fixed inset-x-0 top-0 py-2 border-b'>
			<div className='container flex items-center justify-between h-full max-w-2xl'>
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
