import { useQuery } from '@tanstack/react-query';
import { GetStudioParams, getJoinedStudios, getStudio } from '../client/query';

export const useGetStudio = ({ studioId }: GetStudioParams) => {
	return useQuery(['studio', studioId], () => getStudio({ studioId }));
};

export const useGetJoinedStudios = () => {
	return useQuery(['studio', 'joined'], getJoinedStudios);
};
