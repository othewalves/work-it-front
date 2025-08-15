import { NextResponse, type MiddlewareConfig, type NextRequest } from 'next/server'

const PUBLIC_ROUTES = [
    { path: '/login', whenAuthenticate: 'redirect' },
    { path: '/sign-up', whenAuthenticate: 'redirect' },
    { path: '/', whenAuthenticate: 'redirect' },
] as const;

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/';

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const public_route = PUBLIC_ROUTES.find((route) => path === route.path);
    const authToken = request.cookies.get('@work-it:token');

    if (!authToken && public_route) {
        return NextResponse.next()
    }

    if (!authToken && !public_route) {
        const redirectUrl = request.nextUrl.clone();

        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;

        return NextResponse.redirect(redirectUrl);
    };

    if (authToken && public_route && public_route.whenAuthenticate === 'redirect') {
        const redirectUrl = request.nextUrl.clone();

        redirectUrl.pathname = '/dashboard';

        return NextResponse.redirect(redirectUrl);
    }

    if (authToken && !public_route) {
        return NextResponse.next();
    };

    return NextResponse.next();


}
export const config: MiddlewareConfig = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
    ]
}