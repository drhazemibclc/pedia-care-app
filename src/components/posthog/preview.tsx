'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { usePostHog } from 'posthog-js/react'
import { useEffect } from 'react'

export default function PostHogPageView() {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const posthog = usePostHog()

	useEffect(() => {
		if (!posthog || !pathname) return

		const url = `${window.location.origin}${pathname}?${searchParams.toString()}`
		posthog.capture('$pageview', { $current_url: url })
	}, [pathname, searchParams, posthog])

	return null
}
