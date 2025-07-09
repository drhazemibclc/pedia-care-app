import { z } from 'zod'

import type {
	MedicalRecordsOptionalDefaultsWithRelations,
	MedicalRecordsPartialWithRelations,
	MedicalRecordsWithRelations,
} from './MedicalRecordsSchema'
import {
	MedicalRecordsOptionalDefaultsWithRelationsSchema,
	MedicalRecordsPartialWithRelationsSchema,
	MedicalRecordsWithRelationsSchema,
} from './MedicalRecordsSchema'
import type {
	ServicesOptionalDefaultsWithRelations,
	ServicesPartialWithRelations,
	ServicesWithRelations,
} from './ServicesSchema'
import {
	ServicesOptionalDefaultsWithRelationsSchema,
	ServicesPartialWithRelationsSchema,
	ServicesWithRelationsSchema,
} from './ServicesSchema'

/////////////////////////////////////////
// LAB TEST SCHEMA
/////////////////////////////////////////

export const LabTestSchema = z.object({
	id: z.number().int(),
	recordId: z.number().int(),
	testDate: z.coerce.date(),
	result: z.string(),
	status: z.string(),
	notes: z.string().nullish(),
	serviceId: z.number().int(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})

export type LabTest = z.infer<typeof LabTestSchema>

/////////////////////////////////////////
// LAB TEST PARTIAL SCHEMA
/////////////////////////////////////////

export const LabTestPartialSchema = LabTestSchema.partial()

export type LabTestPartial = z.infer<typeof LabTestPartialSchema>

/////////////////////////////////////////
// LAB TEST OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LabTestOptionalDefaultsSchema = LabTestSchema.merge(
	z.object({
		id: z.number().int().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	}),
)

export type LabTestOptionalDefaults = z.infer<typeof LabTestOptionalDefaultsSchema>

/////////////////////////////////////////
// LAB TEST RELATION SCHEMA
/////////////////////////////////////////

export type LabTestRelations = {
	services: ServicesWithRelations
	medicalRecord: MedicalRecordsWithRelations
}

export type LabTestWithRelations = z.infer<typeof LabTestSchema> & LabTestRelations

export const LabTestWithRelationsSchema: z.ZodType<LabTestWithRelations> = LabTestSchema.merge(
	z.object({
		services: z.lazy(() => ServicesWithRelationsSchema),
		medicalRecord: z.lazy(() => MedicalRecordsWithRelationsSchema),
	}),
)

/////////////////////////////////////////
// LAB TEST OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type LabTestOptionalDefaultsRelations = {
	services: ServicesOptionalDefaultsWithRelations
	medicalRecord: MedicalRecordsOptionalDefaultsWithRelations
}

export type LabTestOptionalDefaultsWithRelations = z.infer<typeof LabTestOptionalDefaultsSchema> &
	LabTestOptionalDefaultsRelations

export const LabTestOptionalDefaultsWithRelationsSchema: z.ZodType<LabTestOptionalDefaultsWithRelations> =
	LabTestOptionalDefaultsSchema.merge(
		z.object({
			services: z.lazy(() => ServicesOptionalDefaultsWithRelationsSchema),
			medicalRecord: z.lazy(() => MedicalRecordsOptionalDefaultsWithRelationsSchema),
		}),
	)

/////////////////////////////////////////
// LAB TEST PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type LabTestPartialRelations = {
	services?: ServicesPartialWithRelations
	medicalRecord?: MedicalRecordsPartialWithRelations
}

export type LabTestPartialWithRelations = z.infer<typeof LabTestPartialSchema> &
	LabTestPartialRelations

export const LabTestPartialWithRelationsSchema: z.ZodType<LabTestPartialWithRelations> =
	LabTestPartialSchema.merge(
		z.object({
			services: z.lazy(() => ServicesPartialWithRelationsSchema),
			medicalRecord: z.lazy(() => MedicalRecordsPartialWithRelationsSchema),
		}),
	).partial()

export type LabTestOptionalDefaultsWithPartialRelations = z.infer<
	typeof LabTestOptionalDefaultsSchema
> &
	LabTestPartialRelations

export const LabTestOptionalDefaultsWithPartialRelationsSchema: z.ZodType<LabTestOptionalDefaultsWithPartialRelations> =
	LabTestOptionalDefaultsSchema.merge(
		z
			.object({
				services: z.lazy(() => ServicesPartialWithRelationsSchema),
				medicalRecord: z.lazy(() => MedicalRecordsPartialWithRelationsSchema),
			})
			.partial(),
	)

export type LabTestWithPartialRelations = z.infer<typeof LabTestSchema> & LabTestPartialRelations

export const LabTestWithPartialRelationsSchema: z.ZodType<LabTestWithPartialRelations> =
	LabTestSchema.merge(
		z
			.object({
				services: z.lazy(() => ServicesPartialWithRelationsSchema),
				medicalRecord: z.lazy(() => MedicalRecordsPartialWithRelationsSchema),
			})
			.partial(),
	)

export default LabTestSchema
