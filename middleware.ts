import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_ROUTES = ['/login', '/sign-up', '/'];

export async function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    const path = req.nextUrl.pathname;

    // Se for rota pública, deixa passar
    if (PUBLIC_ROUTES.includes(path)) return NextResponse.next();

    // Faz requisição para seu backend que usa isAuthenticated
    const baseUrl = 'https://work-it-api-production.up.railway.app'; // ex: "https://work-it-api-production.up.railway.app"
    const authRes = await fetch(`${baseUrl}/api/auth/check`, {
        headers: {
            cookie: req.headers.get('cookie') || '', // envia cookies existentes
        },
    });

    const cookieHeader = req.headers.get('cookie') || '';
    console.log('Cookie enviado para backend:', cookieHeader);

    console.log('Status do check:', authRes.status);

    if (authRes.status !== 200) {
        // Se não autenticado, redireciona para a home
        url.pathname = '/';
        return NextResponse.redirect(url);
    }

    // Usuário autenticado, deixa passar
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
};
