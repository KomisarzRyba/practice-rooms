import axios from 'axios';
import { array, object, string } from 'zod';
import {
	BookingSchema,
	RoomSchema,
	SchedulePropertiesSchema,
	StudioSchema,
	UserSchema,
} from '../../../../prisma/generated/zod';

const getAuthorizedApiClient = async () => {
	let headers: Record<string, string> = {};
	const client = axios.create({
		baseURL: '/api',
		headers: headers,
	});
	return client;
};

export type GetStudioParams = {
	studioId: string;
};
export const getStudio = async ({ studioId }: GetStudioParams) => {
	const client = await getAuthorizedApiClient();
	try {
		const { data } = await client.get(`/studio/${studioId}`);
		return StudioSchema.parse(data);
	} catch (error) {
		console.log(error);
	}
};

export const getJoinedStudios = async () => {
	const client = await getAuthorizedApiClient();
	try {
		const { data } = await client.get(`/studio`);
		return array(StudioSchema).parse(data);
	} catch (error) {
		console.log(error);
	}
};

export type GetMembersParams = GetStudioParams;
export const getMembersWithCreator = async ({ studioId }: GetMembersParams) => {
	const client = await getAuthorizedApiClient();
	try {
		const { data } = await client.get(`/studio/${studioId}/members`);
		return object({
			members: array(UserSchema),
			creator: UserSchema,
		}).parse(data);
	} catch (error) {
		console.log(error);
	}
};

export type GetInvitedUserEmailsParams = GetStudioParams;
export const getInvitedUserEmails = async ({
	studioId,
}: GetInvitedUserEmailsParams) => {
	const client = await getAuthorizedApiClient();
	try {
		const { data } = await client.get(`/studio/${studioId}/invited`);
		return array(string().email()).parse(data);
	} catch (error) {
		console.log(error);
	}
};

export const getPendingStudios = async () => {
	const client = await getAuthorizedApiClient();
	try {
		const { data } = await client.get(`/studio/pending`);
		return array(StudioSchema).parse(data);
	} catch (error) {
		console.log(error);
	}
};

export type GetStudioRoomsParams = GetStudioParams;
export const getStudioRooms = async ({ studioId }: GetStudioParams) => {
	const client = await getAuthorizedApiClient();
	try {
		const { data } = await client.get(`/studio/${studioId}/rooms`);
		return array(RoomSchema).parse(data);
	} catch (error) {
		console.log(error);
	}
};

export type GetRoomBookingsParams = {
	roomId: string;
};
export const getRoomBookings = async ({ roomId }: GetRoomBookingsParams) => {
	const client = await getAuthorizedApiClient();
	try {
		const { data } = await client.get(`/room/${roomId}/bookings`);
		return array(BookingSchema).parse(data);
	} catch (error) {
		console.log(error);
	}
};

export type GetSchedulePropertiesParams = GetStudioParams;
export const getScheduleProperties = async ({
	studioId,
}: GetSchedulePropertiesParams) => {
	const client = await getAuthorizedApiClient();
	try {
		const { data } = await client.get(`/studio/${studioId}/schedule-props`);
		return SchedulePropertiesSchema.parse(data);
	} catch (error) {
		console.log(error);
	}
};
