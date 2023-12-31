import { toast } from '@/components/ui/use-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
	addOrInviteMember,
	createRoom,
	createStudio,
	deleteRoom,
	joinStudio,
	removeFromStudio,
	updateStudioDisplaySettings,
	updateStudioScheduleSettings,
} from '../client/mutation';

const handleError = (error: unknown) => {
	console.log(error);
	return toast({
		title: 'Oopsie... there was an error.',
		description:
			error instanceof AxiosError
				? error.response?.data
				: 'Please try again later.',
		variant: 'destructive',
	});
};

export const useCreateStudio = () => {
	const router = useRouter();
	return useMutation(['create_studio'], createStudio, {
		onError: handleError,
		onSuccess: (createdStudio) => {
			router.push(`/studio/${createdStudio.id}`);
			return toast({
				title: 'Success!',
				description: `${createdStudio.name} has been created!`,
			});
		},
	});
};

export const useUpdateStudioDisplaySettings = (studioId: string) => {
	const client = useQueryClient();
	return useMutation(
		['display_settings', studioId],
		updateStudioDisplaySettings,
		{
			onError: handleError,
			onSuccess: (updatedStudio) => {
				client.invalidateQueries(['studio', studioId]);
				return toast({
					title: 'Success!',
					description: updatedStudio.name + ' has been updated!',
				});
			},
		}
	);
};

export const useAddOrInviteMember = (studioId: string) => {
	const client = useQueryClient();
	return useMutation(['member', studioId], addOrInviteMember, {
		onError: handleError,
		onSuccess: (nameOrEmail) => {
			client.invalidateQueries(['members', studioId]);
			client.invalidateQueries(['invited', studioId]);
			return toast({
				title: 'Success!',
				description: nameOrEmail + ' has been added to the Studio.',
			});
		},
	});
};

export const useJoinStudio = (studioId: string) => {
	const router = useRouter();
	const client = useQueryClient();
	return useMutation(['join', studioId], () => joinStudio(studioId), {
		onError: handleError,
		onSuccess: (joinedStudio) => {
			client.invalidateQueries(['joined_studios']);
			client.invalidateQueries(['pending_studios']);
			router.push(`/studio/${joinedStudio.id}`);
			return toast({
				title: 'Success!',
				description: 'You have joined ' + joinedStudio.name,
			});
		},
	});
};

export const useRemoveFromStudio = (studioId: string) => {
	const session = useSession();
	const router = useRouter();
	const client = useQueryClient();
	return useMutation(['remove', studioId], removeFromStudio, {
		onError: handleError,
		onSuccess: (removedUser) => {
			client.invalidateQueries(['members', studioId]);
			client.invalidateQueries(['invited', studioId]);
			if (session.data?.user.id === removedUser.id) {
				router.push('/');
				return toast({
					title: 'Bye bye!',
					description: `You left ${removedUser.studioName}.`,
				});
			}
			return toast({
				title: 'Bye bye, loser!',
				description: `${removedUser.name} has been removed from ${removedUser.studioName}.`,
			});
		},
	});
};

export const useCreateRoom = () => {
	const client = useQueryClient();
	return useMutation(['create_room'], createRoom, {
		onError: handleError,
		onSuccess: (createdRoom) => {
			client.invalidateQueries(['rooms', createdRoom.studioId]);
			return toast({
				title: 'Yay!',
				description: `${createdRoom.name} has been created.`,
			});
		},
	});
};

export const useDeleteRoom = (roomId: string) => {
	const client = useQueryClient();
	return useMutation(['delete', roomId], deleteRoom, {
		onError: handleError,
		onSuccess: (deletedRoom) => {
			client.invalidateQueries(['rooms', deletedRoom.studioId]);
			return toast({
				title: 'Gone!',
				description: `${deletedRoom.name} has been buldozed.`,
			});
		},
	});
};

export const useUpdateStudioScheduleSettings = (studioId: string) => {
	const client = useQueryClient();
	return useMutation(
		['schedule_settings', studioId],
		updateStudioScheduleSettings,
		{
			onError: handleError,
			onSuccess: () => {
				client.invalidateQueries(['schedule_properties', studioId]);
				return toast({
					title: 'Done!',
					description: 'The Schedule has been updated.',
				});
			},
		}
	);
};
