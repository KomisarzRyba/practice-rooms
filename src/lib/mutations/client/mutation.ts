import { NewMember } from '@/lib/validators/member';
import axios from 'axios';
import { string } from 'zod';

const getAuthorizedApiClient = async () => {
	let headers: Record<string, string> = {};
	const client = axios.create({
		baseURL: '/api',
		headers: headers,
	});
	return client;
};

export const addMember = async ({ studioId, email }: NewMember) => {
	const client = await getAuthorizedApiClient();
	const { data } = await client.post(`/studio/${studioId}/members`, email);
	const addedNameOrEmail = string().parse(data);
	return addedNameOrEmail;
};
