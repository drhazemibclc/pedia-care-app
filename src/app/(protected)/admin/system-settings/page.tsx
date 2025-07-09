import { SettingsQuickLinks } from '@/components/settings/quick-link-settings'
import { ServiceSettings } from '@/components/settings/services-settings'
import { Card } from '@/components/ui/card'
import type { SearchParamsProps } from '@/types'

const SystemSettingPage = async (props: SearchParamsProps) => {
	const searchParams = await props.searchParams
	const cat = (searchParams?.cat || 'services') as string

	return (
		<div className="flex min-h-screen w-full flex-col gap-10 p-6 lg:flex-row">
			<div className="flex w-full flex-col gap-4 lg:w-[70%]">
				<Card className="rounded-xl shadow-none">{cat === 'services' && <ServiceSettings />}</Card>
			</div>
			<div className="w-full space-y-6">
				<SettingsQuickLinks />
			</div>
		</div>
	)
}

export default SystemSettingPage
