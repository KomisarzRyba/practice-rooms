import { useQuery } from '@tanstack/react-query';
import {
	GetInvitedUserEmailsParams,
	GetMembersParams,
	GetStudioParams,
	getInvitedUserEmails,
	getJoinedStudios,
	getMembersWithCreator,
	getStudio,
} from '../client/query';

export const useGetStudio = ({ studioId }: GetStudioParams) => {
	return useQuery(['studio', studioId], () => getStudio({ studioId }));
};

export const useGetJoinedStudios = () => {
	return useQuery(['studio', 'joined'], getJoinedStudios);
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
