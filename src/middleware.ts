import { NextRequest, NextResponse } from 'next/server';

export const middleware = (req: NextRequest) => {
	if (req.nextUrl.pathname.endsWith('/settings')) {
		return NextResponse.redirect(`${req.nextUrl.href}/general`);
	}
};
