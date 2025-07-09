import { z } from 'zod'

export const MeasurementTypeSchema = z.enum(['WFA', 'HFA', 'HcFA'])

export type MeasurementTypeType = `${z.infer<typeof MeasurementTypeSchema>}`

export default MeasurementTypeSchema
