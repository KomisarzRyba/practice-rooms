import { NewMember } from '@/lib/validators/member';
import { NewRoom } from '@/lib/validators/room';
import {
	NewStudio,
	StudioDisplaySettings,
	StudioScheduleProperties,
} from '@/lib/validators/studio';
import { Prisma, Room } from '@prisma/client';
import axios from 'axios';
import { string } from 'zod';
import {
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

export const createStudio = async (newStudio: NewStudio) => {
	const client = await getAuthorizedApiClient();
	const { data } = await client.post('/studio', newStudio);
	return StudioSchema.parse(data);
};

type UpdateStudioDisplaySettingsParams = StudioDisplaySettings & {
	studioId: string;
};
export const updateStudioDisplaySettings = async ({
	studioId,
	...settings
}: UpdateStudioDisplaySettingsParams) => {
	const client = await getAuthorizedApiClient();
	const prismaInput: Prisma.StudioUpdateArgs = {
		where: { id: studioId },
		data: { ...settings },
	};
	const { data } = await client.patch(`/studio/${studioId}`, prismaInput);
	return StudioSchema.parse(data);
};

export const addOrInviteMember = async ({ studioId, email }: NewMember) => {
	const client = await getAuthorizedApiClient();
	const { data } = await client.post(`/studio/${studioId}/members`, email);
	return string().parse(data);
};

export const joinStudio = async (studioId: string) => {
	const client = await getAuthorizedApiClient();
	const { data } = await client.post(`/studio/${studioId}/join`);
	return StudioSchema.parse(data);
};

export type RemoveFromStudioParams = {
	studioId: string;
	userId: string;
};
export const removeFromStudio = async ({
	studioId,
	userId,
}: RemoveFromStudioParams) => {
	const client = await getAuthorizedApiClient();
	const { data } = await client.patch(`/studio/${studioId}/join`, userId);
	return UserSchema.extend({ studioName: string() }).parse(data);
};

export const createRoom = async (newRoom: NewRoom) => {
	const client = await getAuthorizedApiClient();
	const { data } = await client.post(`/room`, newRoom);
	return RoomSchema.parse(data);
};

export type DeleteRoomParams = Pick<Room, 'id'>;
export const deleteRoom = async ({ id }: DeleteRoomParams) => {
	const client = await getAuthorizedApiClient();
	const { data } = await client.delete(`/room/${id}`);
	return RoomSchema.parse(data);
};

type UpdateStudioScheduleSettingsParams = StudioScheduleProperties & {
	studioId: string;
};
export const updateStudioScheduleSettings = async ({
	studioId,
	...settings
}: UpdateStudioScheduleSettingsParams) => {
	const client = await getAuthorizedApiClient();
	const prismaInput: Prisma.SchedulePropertiesUpdateArgs = {
		where: { studioId },
		data: settings,
	};
	const { data } = await client.put(
		`/studio/${studioId}/schedule-props`,
		prismaInput
	);
	return SchedulePropertiesSchema.parse(data);
};
