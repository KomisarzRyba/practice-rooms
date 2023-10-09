import { useQuery } from '@tanstack/react-query';
import {
	GetInvitedUserEmailsParams,
	GetMembersParams,
	GetStudioParams,
	GetStudioRoomsParams,
	getInvitedUserEmails,
	getJoinedStudios,
	getMembersWithCreator,
	getPendingStudios,
	getStudio,
	getStudioRooms,
} from '../client/query';

export const useGetStudio = ({ studioId }: GetStudioParams) => {
	return useQuery(['studio', studioId], () => getStudio({ studioId }));
};

export const useGetJoinedStudios = () => {
	return useQuery(['joined_studios'], getJoinedStudios);
};

export const useGetMembersWithCreator = ({ studioId }: GetMembersParams) => {
	return useQuery(['members', studioId], () =>
		getMembersWithCreator({ studioId })
	);
};

export const useGetInvitedUserEmails = ({
	studioId,
}: GetInvitedUserEmailsParams) => {
	return useQuery(['invited', studioId], () =>
		getInvitedUserEmails({ studioId })
	);
};

export const useGetPendingStudios = () => {
	return useQuery(['pending_studios'], getPendingStudios);
};

export const useGetStudioRooms = ({ studioId }: GetStudioRoomsParams) => {
	return useQuery(['rooms', studioId], () => getStudioRooms({ studioId }));
};
