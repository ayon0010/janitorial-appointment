import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const userRoutes = ['/profile', '/dashboard'];
const adminRoutes = [
    '/adminDashboard',
    '/adminDashboard/allLeads',
    '/adminDashboard/allUser',
    '/adminDashboard/leadUpload',
    '/adminDashboard/allLeads/:id',
    '/adminDashboard/subscriber'
];
const sellerRoutes = ['/sellerDashboard', '/sellerDashboard/leadUpload'];

function pathMatches(pathname, routes) {
    return routes.some(route => {
        if (route.includes(':')) {
            // Convert route with :param to a regex
            const regex = new RegExp('^' + route.replace(/:\w+/g, '[^/]+') + '$');
            return regex.test(pathname);
        }
        return pathname.startsWith(route);
    });
}

export async function middleware(request) {
    const pathname = request.nextUrl.pathname;
    const cookieStore = await cookies();
    const token = cookieStore.get('userToken')?.value;

    const loginURL = new URL('/login', request.url);
    loginURL.searchParams.append('redirect', pathname);
    loginURL.searchParams.append('message', 'You need to log in to access this page.');

    if (!token) {
        console.log('x')
        return NextResponse.redirect(loginURL);
    }

    try {
        const decoded = jwtDecode(token);
        const isAdmin = decoded?.isAdmin;
        const isSeller = decoded?.isSeller;

        if (isAdmin && pathMatches(pathname, adminRoutes)) {
            return NextResponse.next();
        }

        if (isSeller && (pathMatches(pathname, userRoutes) || pathMatches(pathname, sellerRoutes))) {
            return NextResponse.next();
        }

        if (pathMatches(pathname, userRoutes)) {
            return NextResponse.next();
        }

        return NextResponse.redirect(loginURL);
    } catch (error) {
        return NextResponse.redirect(loginURL);
    }
}

export const config = {
    matcher: [
        '/profile',
        '/dashboard/:path*',
        '/adminDashboard/:path*',
        '/sellerDashboard/:path*',
    ],
};
