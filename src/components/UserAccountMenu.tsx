'use client';

import { User } from 'next-auth';
import React from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';
import UserAvatar from './UserAvatar';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

interface UserAccountMenuProps {
	user: Pick<User, 'name' | 'email' | 'image'>;
}

const UserAccountMenu: React.FC<UserAccountMenuProps> = ({ user }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<UserAvatar className='w-8 h-8' user={user} />
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<div className='flex items-center justify-start gap-2 p-2'>
					<div className='flex flex-col space-y-1 leading-none'>
						{user.name && (
							<p className='font-medium'>{user.name}</p>
						)}
						{user.email && (
							<p className='w-48 text-sm truncate text-muted-foreground'>
								{user.email}
							</p>
						)}
					</div>
				</div>
				<DropdownMenuItem
					onSelect={(event) => {
						event.preventDefault();
						signOut({ callbackUrl: '/' });
					}}
					className='cursor-pointer'
				>
					Sign out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserAccountMenu;
