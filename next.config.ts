import './src/env'

import path from 'path'

import bundleAnalyzer from '@next/bundle-analyzer'
import type { NextConfig } from 'next'

const withBundleAnalyzer = bundleAnalyzer({
	enabled: true,
	openAnalyzer: false,
})

const nextConfig: NextConfig = {
	reactStrictMode: true,

	// --- Code Quality & Type Checking ---
	eslint: {
		ignoreDuringBuilds: true, // Avoid linting errors blocking dev server
	},
	typescript: {
		ignoreBuildErrors: true, // Allows compilation despite type errors
	},
	allowedDevOrigins: ['http://localhost:3000'],
	env: {
		NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV || 'development',
	},
	turbopack: {
		root: path.join(__dirname, '..'),
		rules: {
			'*.svg': {
				loaders: ['@svgr/webpack'],
				as: '*.js', // Treat SVGs as JS
			},
		},
		resolveAlias: {
			crypto: 'crypto-browserify',
		},
	},
	output: 'standalone',
	poweredByHeader: false,

	transpilePackages: ['next-mdx-remote'],
	experimental: {
		ppr: 'incremental',
		reactCompiler: true,
		viewTransition: true,
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

		localPatterns: [
			{
				pathname: '/**',
				search: '',
			},
		],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.pexels.com',
				port: '',
				search: '',
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: '',
				search: '',
			},
			{ hostname: 'utfs.io', protocol: 'https' },
		],
	},
	// --- Webpack Configuration ---
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback = {
				...config.resolve.fallback,
				crypto: require.resolve('crypto-browserify'),
				stream: require.resolve('stream-browserify'),
				buffer: require.resolve('buffer/'),
			}
		}
		return config
	},
	async headers() {
		return [
			{
				source: '/(.*)', // Apply to all routes
				headers: [
					{ key: 'X-DNS-Prefetch-Control', value: 'on' },
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=63072000; includeSubDomains; preload',
					},
					{ key: 'X-Content-Type-Options', value: 'nosniff' },
					{ key: 'X-Frame-Options', value: 'SAMEORIGIN' },
					{ key: 'X-XSS-Protection', value: '1; mode=block' },
					{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
					{ key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
					{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
				],
			},
		]
	},
}

export default withBundleAnalyzer(nextConfig)
