import type { SubArray } from 'better-auth/plugins/access'
import { createAccessControl } from 'better-auth/plugins/access'
import { adminAc, defaultStatements, userAc } from 'better-auth/plugins/admin/access'

export type Role = keyof typeof allRoles

export type Permissions = {
	[k in keyof typeof statement]?: SubArray<(typeof statement)[k]>
}

export const statement = {
	session: defaultStatements.session,
	user: Array.from(new Set(['read', 'unban', 'update', ...defaultStatements.user])),
	task: ['create', 'read', 'update', 'delete'],
	patient: ['create', 'read', 'update', 'delete'],
	appointment: ['create', 'read', 'update', 'delete'],
	doctor: ['create', 'read', 'update', 'delete'],
	medicalRecord: ['create', 'read', 'update', 'delete'],
} as const

export const ac = createAccessControl(statement)

const adminRole = ac.newRole({
	task: ['create', 'read', 'update', 'delete'],
	session: adminAc.statements.session,
	user: [
		'create',
		'read',
		'update',
		'delete',
		'list',
		'ban',
		'unban',
		'impersonate',
		'set-password',
		'set-role',
	],
	patient: ['create', 'read', 'update', 'delete'],
	appointment: ['create', 'read', 'update', 'delete'],
	doctor: ['create', 'read', 'update', 'delete'],
	medicalRecord: ['create', 'read', 'update', 'delete'],
})

const doctorRole = ac.newRole({
	task: ['create', 'read', 'update', 'delete'],
	...userAc.statements,
	user: ['create', 'read', 'update', 'delete', 'ban', 'unban'],
	patient: ['create', 'read', 'update'],
	appointment: ['create', 'read', 'update'],
	doctor: ['create', 'read', 'update'],
	medicalRecord: ['create', 'read', 'update'],
})
const patientRole = ac.newRole({
	user: ['read', 'update', 'delete'],
	patient: ['create', 'read', 'update'],
	appointment: ['create', 'read', 'update'],
	doctor: ['create', 'read', 'update'],
	medicalRecord: ['create', 'read', 'update'],
})
const staffRole = ac.newRole({
	user: ['read', 'update', 'delete'],
	patient: ['create', 'read', 'update', 'delete'],
	appointment: ['create', 'read', 'update', 'delete'],
	doctor: ['create', 'read', 'update', 'delete'],
	medicalRecord: ['create', 'read', 'update', 'delete'],
})

export const allRoles = {
	admin: adminRole,
	doctor: doctorRole,
	patient: patientRole,
	nurse: staffRole,
} as const

export const rolesData = Object.keys(allRoles) as Array<Role>

export type rolesEnumData = (typeof rolesData)[number]
