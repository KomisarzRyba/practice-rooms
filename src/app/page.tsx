import Login from '@/components/Login';
import { Button } from '@/components/ui/button';
import { getAuthSession } from '@/lib/auth';

export default async function Home() {
	const session = await getAuthSession();
	console.log(session);
	return (
		<main className='container flex flex-col items-center justify-center min-h-screen'>
			{session?.user ? (
				<div>Welcome back, {session.user.name}</div>
			) : (
				<Login />
			)}
		</main>
	);
}
