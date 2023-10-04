import { useQuery } from '@tanstack/react-query';
import {
	GetMembersParams,
	GetStudioParams,
	getJoinedStudios,
	getMembers,
	getStudio,
} from '../client/query';

export const useGetStudio = ({ studioId }: GetStudioParams) => {
	return useQuery(['studio', studioId], () => getStudio({ studioId }));
};

export const useGetJoinedStudios = () => {
	return useQuery(['studio', 'joined'], getJoinedStudios);
};

export const useGetMembers = ({ studioId, withCreator }: GetMembersParams) => {
	return useQuery(['members', studioId], () =>
		getMembers({ studioId, withCreator })
	);
};
