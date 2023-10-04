import axios from 'axios';
import { StudioSchema, UserSchema } from '../../../../prisma/generated/zod';
import { object, array } from 'zod';

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

export type GetMembersParams = GetStudioParams & {
	withCreator?: boolean;
};
export const getMembers = async ({
	studioId,
	withCreator,
}: GetMembersParams) => {
	const client = await getAuthorizedApiClient();
	try {
		const { data } = await client.get(`/studio/${studioId}/members`);
		return withCreator
			? object({
					members: array(UserSchema),
					creator: UserSchema.pick({ id: true }),
			  }).parse(data)
			: object({
					members: array(UserSchema),
			  }).parse(data);
	} catch (error) {
		console.log(error);
	}
};
