import { z } from 'zod'

import { ServiceCategorySchema } from '../inputTypeSchemas/ServiceCategorySchema'
import type {
	AppointmentOptionalDefaultsWithRelations,
	AppointmentPartialWithRelations,
	AppointmentWithRelations,
} from './AppointmentSchema'
import {
	AppointmentOptionalDefaultsWithRelationsSchema,
	AppointmentPartialWithRelationsSchema,
	AppointmentWithRelationsSchema,
} from './AppointmentSchema'
import type {
	LabTestOptionalDefaultsWithRelations,
	LabTestPartialWithRelations,
	LabTestWithRelations,
} from './LabTestSchema'
import {
	LabTestOptionalDefaultsWithRelationsSchema,
	LabTestPartialWithRelationsSchema,
	LabTestWithRelationsSchema,
} from './LabTestSchema'
import type {
	PatientBillsOptionalDefaultsWithRelations,
	PatientBillsPartialWithRelations,
	PatientBillsWithRelations,
} from './PatientBillsSchema'
import {
	PatientBillsOptionalDefaultsWithRelationsSchema,
	PatientBillsPartialWithRelationsSchema,
	PatientBillsWithRelationsSchema,
} from './PatientBillsSchema'

/////////////////////////////////////////
// SERVICES SCHEMA
/////////////////////////////////////////

export const ServicesSchema = z.object({
	category: ServiceCategorySchema.nullish(),
	id: z.number().int(),
	serviceName: z.string(),
	description: z.string(),
	price: z.number(),
	duration: z.number().int().nullish(),
	isAvailable: z.boolean(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})

export type Services = z.infer<typeof ServicesSchema>

/////////////////////////////////////////
// SERVICES PARTIAL SCHEMA
/////////////////////////////////////////

export const ServicesPartialSchema = ServicesSchema.partial()

export type ServicesPartial = z.infer<typeof ServicesPartialSchema>

/////////////////////////////////////////
// SERVICES OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ServicesOptionalDefaultsSchema = ServicesSchema.merge(
	z.object({
		id: z.number().int().optional(),
		isAvailable: z.boolean().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	}),
)

export type ServicesOptionalDefaults = z.infer<typeof ServicesOptionalDefaultsSchema>

/////////////////////////////////////////
// SERVICES RELATION SCHEMA
/////////////////////////////////////////

export type ServicesRelations = {
	labtest?: LabTestWithRelations | null
	bills: PatientBillsWithRelations[]
	appointments: AppointmentWithRelations[]
}

export type ServicesWithRelations = z.infer<typeof ServicesSchema> & ServicesRelations

export const ServicesWithRelationsSchema: z.ZodType<ServicesWithRelations> = ServicesSchema.merge(
	z.object({
		labtest: z.lazy(() => LabTestWithRelationsSchema).nullish(),
		bills: z.lazy(() => PatientBillsWithRelationsSchema).array(),
		appointments: z.lazy(() => AppointmentWithRelationsSchema).array(),
	}),
)

/////////////////////////////////////////
// SERVICES OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type ServicesOptionalDefaultsRelations = {
	labtest?: LabTestOptionalDefaultsWithRelations | null
	bills: PatientBillsOptionalDefaultsWithRelations[]
	appointments: AppointmentOptionalDefaultsWithRelations[]
}

export type ServicesOptionalDefaultsWithRelations = z.infer<typeof ServicesOptionalDefaultsSchema> &
	ServicesOptionalDefaultsRelations

export const ServicesOptionalDefaultsWithRelationsSchema: z.ZodType<ServicesOptionalDefaultsWithRelations> =
	ServicesOptionalDefaultsSchema.merge(
		z.object({
			labtest: z.lazy(() => LabTestOptionalDefaultsWithRelationsSchema).nullish(),
			bills: z.lazy(() => PatientBillsOptionalDefaultsWithRelationsSchema).array(),
			appointments: z.lazy(() => AppointmentOptionalDefaultsWithRelationsSchema).array(),
		}),
	)

/////////////////////////////////////////
// SERVICES PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ServicesPartialRelations = {
	labtest?: LabTestPartialWithRelations | null
	bills?: PatientBillsPartialWithRelations[]
	appointments?: AppointmentPartialWithRelations[]
}

export type ServicesPartialWithRelations = z.infer<typeof ServicesPartialSchema> &
	ServicesPartialRelations

export const ServicesPartialWithRelationsSchema: z.ZodType<ServicesPartialWithRelations> =
	ServicesPartialSchema.merge(
		z.object({
			labtest: z.lazy(() => LabTestPartialWithRelationsSchema).nullish(),
			bills: z.lazy(() => PatientBillsPartialWithRelationsSchema).array(),
			appointments: z.lazy(() => AppointmentPartialWithRelationsSchema).array(),
		}),
	).partial()

export type ServicesOptionalDefaultsWithPartialRelations = z.infer<
	typeof ServicesOptionalDefaultsSchema
> &
	ServicesPartialRelations

export const ServicesOptionalDefaultsWithPartialRelationsSchema: z.ZodType<ServicesOptionalDefaultsWithPartialRelations> =
	ServicesOptionalDefaultsSchema.merge(
		z
			.object({
				labtest: z.lazy(() => LabTestPartialWithRelationsSchema).nullish(),
				bills: z.lazy(() => PatientBillsPartialWithRelationsSchema).array(),
				appointments: z.lazy(() => AppointmentPartialWithRelationsSchema).array(),
			})
			.partial(),
	)

export type ServicesWithPartialRelations = z.infer<typeof ServicesSchema> & ServicesPartialRelations

export const ServicesWithPartialRelationsSchema: z.ZodType<ServicesWithPartialRelations> =
	ServicesSchema.merge(
		z
			.object({
				labtest: z.lazy(() => LabTestPartialWithRelationsSchema).nullish(),
				bills: z.lazy(() => PatientBillsPartialWithRelationsSchema).array(),
				appointments: z.lazy(() => AppointmentPartialWithRelationsSchema).array(),
			})
			.partial(),
	)

export default ServicesSchema
