'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

import { Button } from './ui/button'

interface PaginationProps {
	totalRecords: number
	currentPage: number
	totalPages: number
	limit: number
}

export const Pagination = ({ totalPages, currentPage, totalRecords, limit }: PaginationProps) => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const pathname = usePathname()

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString())
			params.set(name, value)

			return params.toString()
		},
		[searchParams],
	)

	const handlePrevious = () => {
		if (currentPage > 1) {
			router.push(`${pathname}?${createQueryString('p', (currentPage - 1).toString())}`)
			// router.push(`?p=${currentPage - 1}`);
		}
	}

	const handleNext = () => {
		if (currentPage < totalPages) {
			// router.push(`?p=${currentPage + 1}`);
			router.push(`${pathname}?${createQueryString('p', (currentPage + 1).toString())}`)
		}
	}

	if (totalRecords === 0) return null

	return (
		<div className="mt-5 flex items-center justify-between p-4 text-gray600">
			<Button
				className="rounded-md bg-slate-200 px-4 py-2 font-semibold text-sm disabled:cursor-not-allowed disabled:opacity-50"
				disabled={currentPage === 1}
				onClick={handlePrevious}
				size={'sm'}
				variant={'outline'}
			>
				Prev
			</Button>
			{/* 10 - 9 = 11 - 20 of 20 */}
			<div className="flex items-center gap-2 text-sm">
				<span className="text-xs lg:text-sm">
					Showing {currentPage * limit - (limit - 1)} to{' '}
					{currentPage * limit <= totalRecords ? currentPage * limit : totalRecords} of{' '}
					{totalRecords}
				</span>
			</div>

			<Button
				className="rounded-md bg-slate-200 px-4 py-2 font-semibold text-sm disabled:cursor-not-allowed disabled:opacity-50"
				disabled={currentPage === totalPages}
				onClick={handleNext}
				size={'sm'}
				variant={'outline'}
			>
				Next
			</Button>
		</div>
	)
}
