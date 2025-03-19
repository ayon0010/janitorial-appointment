import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'

const userRoutes = ['/profile', '/dashboard'];
const adminRoutes = ['/adminDashboard', '/adminDashboard/allLeads', '/adminDashboard/allUser', '/adminDashboard/leadUpload', '/adminDashboard/allLeads/:id', '/adminDashboard/subscriber'];
const sellerRoutes = ['/sellerDashboard', '/sellerDashboard/leadUpload'];

export async function middleware(request) {
    const pathname = request.nextUrl.pathname;
    const cookieStore = await cookies();
    const token = cookieStore.get('userToken')?.value;
    const loginURL = new URL('/login', request.url);
    loginURL.searchParams.append('redirect', pathname);
    loginURL.searchParams.append('message', 'You need to log in to access this page.');

    if (!token) {
        return NextResponse.redirect(loginURL);
    }
    try {
        const decoded = jwtDecode(token);
        const isAdmin = decoded?.isAdmin;
        const isSeller = decoded?.isSeller;
        if (isAdmin) {
            return NextResponse.next();
        }
        else if (isSeller && (userRoutes.includes(pathname)) || sellerRoutes.includes(pathname)) {
            return NextResponse.next();
        }
        else if (userRoutes.includes(pathname)) {
            return NextResponse.next();
        }
        return NextResponse.redirect(loginURL)
    } catch (error) {
        return NextResponse.redirect(loginURL)
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/profile', '/dashboard', '/dashboard/:path*', '/adminDashboard', '/adminDashboard/allLeads', '/adminDashboard/allUser', '/adminDashboard/leadUpload', '/sellerDashboard', '/sellerDashboard/leadUpload', '/adminDashboard/allLeads/:id', '/adminDashboard/subscriber', '/adminDashboard/contacts', '/adminDashboard/messages'],
}