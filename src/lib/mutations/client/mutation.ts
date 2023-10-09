import { NewMember } from '@/lib/validators/member';
import axios from 'axios';
import { string } from 'zod';
import {
	RoomSchema,
	StudioSchema,
	UserSchema,
} from '../../../../prisma/generated/zod';
import { Prisma, Room } from '@prisma/client';
import { NewStudio, StudioGeneralSettings } from '@/lib/validators/studio';
import { NewRoom } from '@/lib/validators/room';

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
	const createdStudio = StudioSchema.parse(data);
	return createdStudio;
};

export const updateStudioSettings = async ({
	studioId,
	...settings
}: StudioGeneralSettings) => {
	const client = await getAuthorizedApiClient();
	const prismaInput: Prisma.StudioUpdateArgs = {
		where: { id: studioId },
		data: { ...settings },
	};
	const { data } = await client.patch(`/studio/${studioId}`, prismaInput);
	const updatedStudio = StudioSchema.parse(data);
	return updatedStudio;
};

export const addOrInviteMember = async ({ studioId, email }: NewMember) => {
	const client = await getAuthorizedApiClient();
	const { data } = await client.post(`/studio/${studioId}/members`, email);
	const addedNameOrEmail = string().parse(data);
	return addedNameOrEmail;
};

export const joinStudio = async (studioId: string) => {
	const client = await getAuthorizedApiClient();
	const { data } = await client.post(`/studio/${studioId}/join`);
	const joinedStudio = StudioSchema.parse(data);
	return joinedStudio;
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
	const removedUser = UserSchema.extend({ studioName: string() }).parse(data);
	return removedUser;
};

export const createRoom = async (newRoom: NewRoom) => {
	const client = await getAuthorizedApiClient();
	const { data } = await client.post(`/room`, newRoom);
	const createdRoom = RoomSchema.parse(data);
	return createdRoom;
};

export type DeleteRoomParams = Pick<Room, 'id'>;
export const deleteRoom = async ({ id }: DeleteRoomParams) => {
	const client = await getAuthorizedApiClient();
	const { data } = await client.delete(`/room/${id}`);
	const deletedRoom = RoomSchema.parse(data);
	return deletedRoom;
};
