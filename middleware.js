import { NextResponse } from 'next/server'

export function middleware(request) {
  // Check if the request is for the administrator guide
  if (request.nextUrl.pathname === '/documents/administrator-guide') {
    // Check for the authentication cookie
    const isAuthenticated = request.cookies.get('admin_authenticated')
    
    if (!isAuthenticated) {
      // Redirect to login page if not authenticated
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/documents/administrator-guide',
} 