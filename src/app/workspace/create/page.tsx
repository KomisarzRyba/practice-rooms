import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { FC } from 'react';

const CreateWorkspacePage: FC = () => {
	return (
		<main className='container py-8'>
			<Card>
				<CardHeader>
					<CardTitle></CardTitle>
					<CardDescription></CardDescription>
				</CardHeader>
				<CardContent></CardContent>
				<CardFooter></CardFooter>
			</Card>
		</main>
	);
};

export default CreateWorkspacePage;
