'use client'

import dynamic from 'next/dynamic'

import type { ParticleEmitterConfig } from './particle-emitter'

// Dynamic import with no SSR for the particle effect
const ParticleEmitter = dynamic(() => import('@/components/effects/particle-emitter'), {
	ssr: false,
})

// Custom configuration for the particle emitter
const particleConfig: ParticleEmitterConfig = {
	// Particle settings
	numParticles: 5000,
	particleMinSize: 5,
	particleMaxSize: 10,
	particleSpeedMultiplier: 0.5,
	particleEmissionRate: 0.125,
	particleOrbitalRadius: 25,

	// Cursor settings
	cursorRadius: 15,
	cursorOpacity: 0.9,

	// Spring physics settings
	springConstant: 0.085,
	mass: 1,
	dampingCoefficient: 0.85,

	// Colors - you can customize these to match your site theme
	colors: ['#9ab9ff', '#ffffff', '#8A9A5B', '#FFF9B0'],
}

export default function ParticleEmitterWrapper() {
	return (
		<div className="hidden sm:block">
			<ParticleEmitter config={particleConfig} />
		</div>
	)
}
