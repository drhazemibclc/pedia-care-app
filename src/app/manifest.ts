import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'PediaCare App', // Updated full name for your Pedia app
		short_name: 'PediaCare', // Updated short name for your Pedia app
		description: 'A comprehensive app designed for pediatric care and management.', // Updated description
		start_url: '/',
		display: 'standalone',
		background_color: '#1c1917', // Keeping existing background color
		theme_color: '#1c1917', // Keeping existing theme color
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
			// --- BEST PRACTICE SUGGESTION FOR PWAs ---
			// For a better PWA experience, consider adding dedicated PNG icons
			// of various sizes. Example:
			// {
			//     src: '/icons/android-chrome-192x192.png',
			//     sizes: '192x192',
			//     type: 'image/png',
			// },
			// {
			//     src: '/icons/android-chrome-512x512.png',
			//     sizes: '512x512',
			//     type: 'image/png',
			// },
			// {
			//     src: '/icons/apple-touch-icon.png',
			//     sizes: '180x180',
			//     type: 'image/png',
			//     purpose: 'apple touch icon',
			// },
			// {
			//     src: '/icons/maskable_icon.png',
			//     sizes: 'any',
			//     type: 'image/png',
			//     purpose: 'maskable',
			// },
		],
	}
}
