// app/components/ui/image.tsx
/** biome-ignore-all lint/performance/noImgElement: <needed> */
import React from 'react'

import { cn } from '@/lib/utils' // Assuming you have a `cn` utility

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	// You can add more props here for specific optimization needs,
	// e.g., `lazyLoad?: boolean`, `placeholder?: string`, `webpSrc?: string`
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
	({ className, alt, src, ...props }, ref) => {
		if (!src) {
			console.warn('Image component used without a src prop.')
			// You might want to render a fallback icon or a transparent pixel
			return (
				<span
					aria-label="Missing Image"
					className={cn('inline-block rounded bg-gray-200', className)}
					role="img"
				/>
			)
		}

		return (
			<img
				alt={alt || ''}
				className={cn(className)}
				loading="lazy"
				ref={ref}
				src={src}
				{...props}
			/>
		)
	},
)

Image.displayName = 'Image'
