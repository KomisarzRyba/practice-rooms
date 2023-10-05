import { useQuery } from '@tanstack/react-query';
import {
	GetMembersParams,
	GetStudioParams,
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
