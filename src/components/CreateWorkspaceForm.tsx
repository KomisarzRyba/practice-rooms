'use client';

import { NewWorkspace, newWorkspace } from '@/lib/validators/workspace';
import { User } from 'next-auth';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';

interface CreateWorkspaceFormProps {
	user: User;
}

const CreateWorkspaceForm: FC<CreateWorkspaceFormProps> = ({ user }) => {
	const { register, handleSubmit } = useForm<NewWorkspace>({
		resolver: zodResolver(newWorkspace),
	});
	return (
		<form onSubmit={handleSubmit(console.log)} className='w-full h-full'>
			<Label htmlFor='name'>Name</Label>
			<Input
				type='text'
				id='name'
				placeholder='e.g. Percussion Studio, Library Study Space'
				{...register('name')}
			/>
			<Button>Continue</Button>
		</form>
	);
};

export default CreateWorkspaceForm;
