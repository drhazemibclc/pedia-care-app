import { AppointmentDetails } from '@/components/appointment/appointment-details'
import AppointmentQuickLinks from '@/components/appointment/appointment-quick-links'
import { BillsContainer } from '@/components/appointment/bills-container'
import ChartContainer from '@/components/appointment/chart-container'
import { DiagnosisContainer } from '@/components/appointment/diagnosis-container'
import { PatientDetailsCard } from '@/components/appointment/patient-details-card'
import { PaymentsContainer } from '@/components/appointment/payment-container'
import { VitalSigns } from '@/components/appointment/vital-signs'
import { MedicalHistoryContainer } from '@/components/medical-history-container'
import { getAppointmentWithMedicalRecordsById } from '@/utils/services/appointment'

const AppointmentDetailsPage = async ({
	params,
	searchParams,
}: {
	params: Promise<{ id: string }>
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
	const { id } = await params
	const search = await searchParams
	const cat = (search?.cat as string) || 'charts'

	const { data } = await getAppointmentWithMedicalRecordsById(Number(id))

	return (
		<div className="flex min-h-screen w-full flex-col-reverse gap-10 p-6 lg:flex-row">
			{/* LEFT */}
			<div className="flex w-full flex-col gap-6 lg:w-[65%]">
				{cat === 'charts' && <ChartContainer id={data?.patient_id as string} />}
				{cat === 'appointments' && (
					<>
						<AppointmentDetails
							appointment_date={data?.appointment_date ?? new Date()}
							id={data?.id as number}
							notes={data?.note ?? 'N/A'}
							patient_id={data?.patient_id as string}
							time={data?.time ?? '10:00'}
						/>

						<VitalSigns
							doctorId={data?.doctor_id as string}
							id={id}
							patientId={data?.patient_id as string}
						/>
					</>
				)}
				{cat === 'diagnosis' && (
					<DiagnosisContainer
						doctorId={data?.doctor_id as string}
						id={id}
						patientId={data?.patient_id as string}
					/>
				)}
				{cat === 'medical-history' && (
					<MedicalHistoryContainer
						id={id as string}
						patientId={data?.patient_id as string}
					/>
				)}
				{cat === 'billing' && <BillsContainer id={id} />}
				{cat === 'payments' && <PaymentsContainer patientId={data?.patient_id as string} />}
			</div>
			{/* RIGHT */}
			<div className="flex-1 space-y-6">
				<AppointmentQuickLinks staffId={data?.doctor_id as string} />
				{data?.patient && <PatientDetailsCard data={data.patient} />}
			</div>
		</div>
	)
}

export default AppointmentDetailsPage
