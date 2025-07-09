import { NextResponse } from 'next/server'

import { auth } from '@/lib/auth' // Your BetterAuth instance
import { routeAccess } from '@/lib/routes' // Your route access config

// Create matcher functions for each protected route
const matchers = Object.keys(routeAccess).map(route => ({
	matcher: (req: Request) => req.url.includes(route),
	allowedRoles: routeAccess[route],
}))

export async function middleware(req: Request) {
	const url = new URL(req.url)
	const session = await auth.api.getSession({ headers: req.headers })

	const user = session?.user ?? null
	const role = user?.role ?? (user ? 'patient' : 'sign-in') // Default role fallback

	const matched = matchers.find(({ matcher }) => matcher(req))

	if (matched?.allowedRoles && !matched.allowedRoles.includes(role)) {
		// Redirect unauthorized roles to their default route (e.g., /doctor, /nurse, /admin)
		return NextResponse.redirect(new URL(`/${role}`, url.origin))
	}

	return NextResponse.next()
}

export const config = {
	 runtime: 'edge',
	matcher: [
		// Run middleware on all app routes except static/public files
		'/((?!Next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		// Always run on API and tRPC routes
		'/(api|trpc)(.*)',
	],
}
