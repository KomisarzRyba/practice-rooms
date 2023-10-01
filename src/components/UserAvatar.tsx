import { User } from 'next-auth';
import React from 'react';
import { Avatar, AvatarFallback } from './ui/avatar';
import Image from 'next/image';
import { Icons } from './Icons';
import { AvatarProps } from '@radix-ui/react-avatar';
import { PersonIcon } from '@radix-ui/react-icons';

interface UserAvatarProps extends AvatarProps {
	user?: Pick<User, 'name' | 'image'>;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ user, ...props }) => (
	<Avatar {...props}>
		{user?.image ? (
			<div className='relative w-full h-full aspect-square'>
				<Image
					fill
					sizes='100px'
					priority
					src={user.image}
					alt='profile picture'
					referrerPolicy='no-referrer'
				/>
			</div>
		) : (
			<AvatarFallback>
				<span className='sr-only'>{user?.name || <PersonIcon />}</span>
				<Icons.user className='w-4 h-4' />
			</AvatarFallback>
		)}
	</Avatar>
);

export default UserAvatar;
