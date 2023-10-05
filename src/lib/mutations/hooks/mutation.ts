import { useMutation } from '@tanstack/react-query';
import { addMember } from '../client/mutation';
import { NewMember } from '@/lib/validators/member';

export const useAddMember = (studioId: string) => {
	return useMutation(['member', studioId], addMember);
};
