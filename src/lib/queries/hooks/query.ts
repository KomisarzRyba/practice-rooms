import { useQuery } from '@tanstack/react-query';
import {
	GetRoomBookingsParams,
	GetInvitedUserEmailsParams,
	GetMembersParams,
	GetStudioParams,
	GetStudioRoomsParams,
	getRoomBookings,
	getInvitedUserEmails,
	getJoinedStudios,
	getMembersWithCreator,
	getPendingStudios,
	getStudio,
	getStudioRooms,
	GetSchedulePropertiesParams,
	getScheduleProperties,
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

export const useGetRoomBookings = ({ roomId }: GetRoomBookingsParams) => {
	return useQuery(['bookings', roomId], () => getRoomBookings({ roomId }));
};

export const useGetScheduleProperties = ({
	studioId,
}: GetSchedulePropertiesParams) => {
	return useQuery(['schedule_settings', studioId], () =>
		getScheduleProperties({ studioId })
	);
};
