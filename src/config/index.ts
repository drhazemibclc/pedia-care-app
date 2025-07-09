// src/config.ts

import { env } from '@/env' // Assuming you have a file to load environment variables, like src/env.ts or next.config.js
import type { UserRole } from '@/types/globals' // Assuming you have defined UserRole in src/types/globals.d.ts

/**
 * ============================================================================
 * Clinic and Application Core Configuration
 * ============================================================================
 *
 * This file centralizes global configuration settings for the Smart Clinic
 * Woman and Child Clinic application. It includes metadata, external service
 * keys, routing, and clinic-specific information.
 */
// src/config.ts (or wherever you define your metaData)

export const metaData = {
	// Base URL for the clinic's website
	baseUrl: 'https://drhazemali.com/', // Replace with the actual domain name when live

	// Primary title for the website
	title: 'Dr. Hazem Ali - Pediatrician & IBCLC | Hurghada, Egypt',

	// Short name of the entity/clinic
	name: 'Dr. Hazem Ali Pediatric Clinic',

	// Path to the Open Graph image (should be a high-quality, relevant image like clinic logo or doctor's photo)
	ogImage: '/images/og-drhazemali.png',

	// Concise description for SEO and social media previews
	description:
		'Dr. Hazem Ali, a highly experienced Pediatrician & IBCLC, offers expert child healthcare and breastfeeding support in Hurghada, Egypt. Dedicated to nurturing happy, healthy children from infancy through adolescence.',

	// More detailed description for 'About Us' sections or extended metadata
	details:
		'Dr. Hazem Ali is a dedicated Pediatrician and International Board Certified Lactation Consultant (IBCLC) committed to providing comprehensive, compassionate, and evidence-based care for children and their families in Hurghada. Services include routine check-ups, vaccinations, management of childhood illnesses, nutritional guidance, and specialized lactation support for new mothers.',

	// Keywords for SEO. Include location, services, and specialties.
	keywords: [
		'Dr. Hazem Ali',
		'Pediatrician Hurghada',
		'Child Doctor Hurghada',
		'IBCLC Hurghada',
		'Lactation Consultant Hurghada',
		'Breastfeeding Support Hurghada',
		"Children's Clinic Hurghada",
		'Pediatric Clinic Hurghada',
		'Hurghada Kids Doctor',
		'Newborn Care Hurghada',
		'Vaccinations Hurghada',
		'Child Health Egypt',
		'Woman and Child Clinic Hurghada',
		'Infant Care Hurghada',
		'Adolescent Health',
		'Child Development',
		'Family Doctor Hurghada',
	],

	// Specific author/creator information
	authors: [{ name: 'Dr. Hazem Ali', url: 'https://drhazemali.com/' }], // Update URL if it's a personal site/profile
	creator: 'Dr. Hazem Ali', // Or the name of the development team/company

	// Social media handles (if applicable)
	twitterHandle: '@DrHazemAliClinic', // Replace with actual Twitter handle if available
	facebookPage: 'https://facebook.com/DrHazemAliPediatrics', // Replace with actual Facebook page URL
	instagramPage: 'https://instagram.com/DrHazemAliClinic', // Replace with actual Instagram page URL

	// Contact Information for easier access and local SEO
	contactEmail: 'info@drhazemali.com', // Official clinic email
	contactPhone: '+20 123 456 7890', // Official clinic phone number
	address: 'Your Clinic Full Address, Hurghada, Red Sea Governorate, Egypt', // Full physical address

	// Optional: A CDN URL if you host assets separately
	// cdn: "https://cdn.drhazemali.com/",
}
// --- 1. Site Metadata ---
// Used for SEO, Open Graph, and general site branding.
export const siteMetadata = {
	name: 'Smart Clinic Woman and Child Clinic',
	title: 'Smart Clinic: Advanced Woman and Child Healthcare',
	description:
		'Providing comprehensive and compassionate healthcare for women and children in Hurghada, Egypt. Specializing in pediatrics, gynecology, obstetrics, and family health.',
	baseUrl: env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000', // Ensure this is your deployed URL in production
	ogImage: '/images/og-image.png', // Path to your Open Graph image in the public directory
	keywords: [
		'Smart Clinic',
		'Woman and Child Clinic',
		'Healthcare Hurghada',
		'Pediatrics Hurghada',
		'Gynecology Hurghada',
		'Obstetrics Hurghada',
		'Family Health Hurghada',
		'Child Specialist Egypt',
		"Women's Health Egypt",
		'Medical Clinic Hurghada',
		'Red Sea Healthcare',
	],
	authors: [{ name: 'Hazem A. Ali', url: 'https://hazemali.dev' }], // Replace with actual author info
	creator: 'Hazem A. Ali',
	twitterHandle: '@SmartClinicEG', // Replace with your clinic's Twitter handle
	contactEmail: 'info@smartclinic.com', // Official contact email
	contactPhone: '+20 123 456 7890', // Official contact phone
	address: '123 Clinic Street, Hurghada, Red Sea Governorate, Egypt',
	workingHours: {
		mondayToFriday: '9:00 AM - 8:00 PM',
		saturday: '10:00 AM - 4:00 PM',
		sunday: 'Closed',
		emergency: '24/7 On-Call',
	},
	googleMapsLink: 'https://maps.app.goo.gl/YOUR_CLINIC_LOCATION_LINK', // Replace with your actual Google Maps link
}

// --- 2. External Services Configuration ---
// Public keys and IDs for third-party services.
export const externalServices = {
	postHog: {
		apiKey: env.NEXT_PUBLIC_POSTHOG_KEY,
		apiHost: env.NEXT_PUBLIC_POSTHOG_HOST,
	},
	googleAnalytics: {
		trackingId: env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, // Example: 'G-XXXXXXXXXX'
	},
	// stripe: {
	// 	publicKey: env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
	// },
	// Add other services like Sentry, Crisp Chat, etc.
}

// --- 3. Routing and Navigation ---
// Centralized definitions for internal and external navigation links.
export const appRoutes = {
	home: '/',
	login: '/login',
	dashboard: '/dashboard',
	appointments: '/dashboard/appointments',
	patients: '/dashboard/patients',
	doctors: '/dashboard/doctors',
	staff: '/dashboard/staff',
	billing: '/dashboard/billing',
	services: '/dashboard/services',
	prescriptions: '/dashboard/prescriptions',
	vaccinations: '/dashboard/vaccinations',
	growthStandards: '/dashboard/growth-standards',
	settings: '/dashboard/settings',
	profile: '/dashboard/profile',
	// Public routes
	aboutUs: '/about',
	contactUs: '/contact',
	blog: '/blog',
	faq: '/faq',
	// Add specific routes for women's health and child health sections
	womensHealth: '/womens-health',
	childHealth: '/child-health',
	scheduleAppointment: '/schedule-appointment',
}

export const navLinks = {
	mainNav: [
		{ title: 'Home', href: appRoutes.home },
		{ title: 'About Us', href: appRoutes.aboutUs },
		{ title: 'Services', href: appRoutes.womensHealth }, // Or a general services page
		{ title: 'Blog', href: appRoutes.blog },
		{ title: 'Contact', href: appRoutes.contactUs },
		{ title: 'Book Appointment', href: appRoutes.scheduleAppointment, highlight: true },
	],
	dashboardNav: [
		{
			title: 'Overview',
			href: appRoutes.dashboard,
			roles: ['ADMIN', 'DOCTOR', 'NURSE', 'CASHIER', 'LAB_TECHNICIAN'] as UserRole[],
		},
		{
			title: 'Appointments',
			href: appRoutes.appointments,
			roles: ['ADMIN', 'DOCTOR', 'NURSE', 'STAFF'] as UserRole[],
		},
		{
			title: 'Patients',
			href: appRoutes.patients,
			roles: ['ADMIN', 'DOCTOR', 'NURSE', 'STAFF', 'LAB_TECHNICIAN'] as UserRole[],
		},
		{ title: 'Doctors', href: appRoutes.doctors, roles: ['ADMIN'] as UserRole[] },
		{ title: 'Staff', href: appRoutes.staff, roles: ['ADMIN'] as UserRole[] },
		{ title: 'Billing', href: appRoutes.billing, roles: ['ADMIN', 'CASHIER'] as UserRole[] },
		{
			title: 'Services Offered',
			href: appRoutes.services,
			roles: ['ADMIN', 'STAFF'] as UserRole[],
		},
		{
			title: 'Prescriptions',
			href: appRoutes.prescriptions,
			roles: ['ADMIN', 'DOCTOR', 'NURSE'] as UserRole[],
		},
		{
			title: 'Vaccinations',
			href: appRoutes.vaccinations,
			roles: ['ADMIN', 'DOCTOR', 'NURSE'] as UserRole[],
		},
		{
			title: 'Growth Standards',
			href: appRoutes.growthStandards,
			roles: ['ADMIN', 'DOCTOR', 'NURSE'] as UserRole[],
		},
		{ title: 'Settings', href: appRoutes.settings, roles: ['ADMIN'] as UserRole[] },
		// Add more specific dashboard links with role-based access if needed
	],
	socialLinks: [
		{ name: 'github', href: 'https://github.com/drhazemibclc' },
		{ name: 'instagram', href: 'https://instagram.com/drhazemibclc' },
		{ name: 'linkedin', href: 'https://linkedin.com/drhazemibclc' },
		{ name: 'youtube', href: 'https://youtube.com/@drhazemibclc' },
		{ name: 'email', href: 'hazem032012@gmail.com' },
		// Add more social media links
	],
}

// --- 4. Application Constants ---
export const appConstants = {
	MAX_FILE_UPLOAD_SIZE_MB: 5,
	PAGINATION_LIMIT: 10,
	DEBOUNCE_TIME_MS: 300,
	PASSWORD_MIN_LENGTH: 8,
	OTP_EXPIRATION_MINUTES: 5,
	// Add any other application-wide constants
}

// --- 5. Theming Configuration (if not fully handled by next-themes props) ---
export const themeConfig = {
	defaultTheme: 'system', // 'light', 'dark', 'system'
	themeAttribute: 'class', // 'class' or 'data-theme'
	enableSystem: true,
}

// --- 6. Other General Settings ---
export const clinicSettings = {
	enableOnlineAppointments: true,
	enablePatientPortal: true,
	// ... any other clinic-specific settings
}

// You can export a default object if you prefer, or individual constants.
const config = {
	siteMetadata,
	externalServices,
	appRoutes,
	navLinks,
	appConstants,
	themeConfig,
	clinicSettings,
}

export default config
