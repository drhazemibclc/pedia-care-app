'use client'

/*
Inspiration: https://playground.p5aholic.me/particle-emitter/
Many thanks to p5aholic for the original code and inspiration.
This is a React component that creates a particle emitter effect on a canvas element.
*/

import { useEffect, useRef } from 'react'

const EMath = {
	constrain: (value: number, min: number, max: number) => {
		return Math.max(Math.min(value, max), min)
	},

	magnitude: (x: number, y: number) => {
		return Math.sqrt(x * x + y * y)
	},

	lerp: (value1: number, value2: number, alpha: number) => {
		return value1 + (value2 - value1) * alpha
	},
}

class Tween {
	position: { x: number; y: number }
	velocity: { x: number; y: number }
	omega: number

	constructor(position: { x: number; y: number }, omega: number) {
		this.position = { ...position }
		this.velocity = { x: 0, y: 0 }
		this.omega = omega
	}

	update(target: { x: number; y: number }, delta: number) {
		const alpha = Math.exp(-this.omega * delta)
		const newX = EMath.lerp(target.x, this.position.x, alpha)
		const newY = EMath.lerp(target.y, this.position.y, alpha)

		this.velocity.x = newX - this.position.x
		this.velocity.y = newY - this.position.y
		this.position.x = newX
		this.position.y = newY
	}

	get x() {
		return this.position.x
	}

	set x(value: number) {
		this.position.x = value
	}

	get y() {
		return this.position.y
	}

	set y(value: number) {
		this.position.y = value
	}
}

interface Particle {
	x: number
	y: number
	tween: Tween
	target: { x: number; y: number }
	size: number
	color: string
	alpha: number
	seed: number
}

interface Cursor {
	x: number
	y: number
	targetX: number
	targetY: number
	velocity: { x: number; y: number }
	prevPosition: { x: number; y: number }
	radius: number
}

// Default configuration
const DEFAULT_CONFIG = {
	// Particle settings
	numParticles: 500,
	particleMinSize: 10,
	particleMaxSize: 50,
	particleSpeedMultiplier: 0.1,
	particleEmissionRate: 0.2,
	particleOrbitalRadius: 30,

	// Cursor settings
	cursorRadius: 15,
	cursorOpacity: 0.5,

	// Spring physics settings
	springConstant: 0.1,
	mass: 1,
	dampingCoefficient: 0.8,

	// Colors
	colors: ['#9ab9ff', '#ffffff', '#86e3ff', '#ffb6fe'],

	// Tween settings
	tweenOmega: 1,
}

export type ParticleEmitterConfig = Partial<typeof DEFAULT_CONFIG>

export interface ParticleEmitterProps {
	config?: ParticleEmitterConfig
}

export default function ParticleEmitter({ config = {} }: ParticleEmitterProps) {
	// Merge default and custom configs
	const {
		numParticles,
		particleMinSize,
		particleMaxSize,
		particleSpeedMultiplier,
		particleEmissionRate,
		particleOrbitalRadius,
		cursorRadius,
		cursorOpacity,
		springConstant,
		mass,
		dampingCoefficient,
		colors,
		tweenOmega,
	} = { ...DEFAULT_CONFIG, ...config }

	const canvasRef = useRef<HTMLCanvasElement>(null)
	const particlesRef = useRef<Particle[]>([])
	const mouseRef = useRef({ x: 0, y: 0 })
	const cursorRef = useRef<Cursor>({
		x: 0,
		y: 0,
		targetX: 0,
		targetY: 0,
		velocity: { x: 0, y: 0 },
		prevPosition: { x: 0, y: 0 },
		radius: cursorRadius,
	})
	const animationFrameRef = useRef<number | null>(null)
	const lastMousePosRef = useRef({ x: 0, y: 0 })
	const mouseVelocityRef = useRef({ x: 0, y: 0 })
	const lastTimeRef = useRef(0)

	// Initialize canvas and start animation
	useEffect(() => {
		if (!canvasRef.current) return

		const canvas = canvasRef.current
		const ctx = canvas.getContext('2d')
		if (!ctx) return

		// Set canvas size to match window
		const setCanvasSize = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
		}

		setCanvasSize()
		window.addEventListener('resize', setCanvasSize)

		// Initialize particles array with tweens
		particlesRef.current = []
		for (let i = 0; i < numParticles; i++) {
			const colorIndex = Math.floor(Math.random() * colors.length)
			const color = colors[colorIndex] ?? '#ffffff'

			particlesRef.current.push({
				x: 0,
				y: 0,
				tween: new Tween({ x: 0, y: 0 }, tweenOmega),
				target: { x: 0, y: 0 },
				size: particleMinSize + Math.random() * (particleMaxSize - particleMinSize),
				color,
				alpha: 0,
				seed: Math.random(),
			})
		}

		// Track mouse position and calculate velocity
		const handleMouseMove = (e: MouseEvent) => {
			// Calculate mouse velocity (difference between current and last position)
			mouseVelocityRef.current = {
				x: e.clientX - lastMousePosRef.current.x,
				y: e.clientY - lastMousePosRef.current.y,
			}

			// Update mouse position
			mouseRef.current = { x: e.clientX, y: e.clientY }
			// Update target position for the cursor follower
			cursorRef.current.targetX = e.clientX
			cursorRef.current.targetY = e.clientY

			// Store last position for next velocity calculation
			lastMousePosRef.current = { x: e.clientX, y: e.clientY }
		}

		window.addEventListener('mousemove', handleMouseMove)

		// Calculate ball (cursor) position with spring physics
		const calcCursorPosition = (timeScale: number) => {
			const cursor = cursorRef.current
			const mouse = mouseRef.current

			// Spring constants
			const K = springConstant // Spring Constant
			const M = mass // Ball Mass
			const D = dampingCoefficient // Damping Coefficient

			// Store previous position
			cursor.prevPosition.x = cursor.x
			cursor.prevPosition.y = cursor.y

			// Calculate distance vector (X in physics equation)
			const dx = cursor.x - mouse.x
			const dy = cursor.y - mouse.y

			// Calculate acceleration: A = -(K * X) / M
			const ax = -(K * dx) / M
			const ay = -(K * dy) / M

			// Update velocity: V(f+1) = V(f) + A
			cursor.velocity.x += ax * timeScale
			cursor.velocity.y += ay * timeScale

			// Update position: X(f+1) = X(f) + V
			cursor.x += cursor.velocity.x * timeScale
			cursor.y += cursor.velocity.y * timeScale

			// Apply damping: V = V * D^timeScale
			const dampFactor = D ** timeScale
			cursor.velocity.x *= dampFactor
			cursor.velocity.y *= dampFactor
		}

		let emitCount = 0

		// Animation loop
		const animate = (timestamp: number) => {
			// Calculate delta time in seconds
			const now = timestamp || performance.now()
			const deltaTime = lastTimeRef.current ? (now - lastTimeRef.current) / 1000 : 0.016
			const timeScale = EMath.constrain(deltaTime / 0.016, 0.5, 2.0) // Normalize around 60fps
			lastTimeRef.current = now

			// Clear the canvas with slight transparency for trails
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			// Update cursor with spring physics
			calcCursorPosition(timeScale)
			const cursor = cursorRef.current

			// Calculate cursor speed for particle emission
			const cursorSpeed = EMath.magnitude(cursor.velocity.x, cursor.velocity.y)
			const direction = Math.atan2(cursor.y - mouseRef.current.y, cursor.x - mouseRef.current.x)

			// Number of particles to emit based on speed
			const emit = Math.min(
				Math.floor(cursorSpeed * particleEmissionRate),
				particlesRef.current.length * 0.1,
			)

			// Emit particles
			for (let i = 0; i < emit; i++) {
				// Check if we have a valid particle at the current emitCount index
				if (emitCount < particlesRef.current.length) {
					const particle = particlesRef.current[emitCount]

					// Extra null check to satisfy TypeScript
					if (particle) {
						const rAngle = Math.random() * Math.PI * 0.25
						const rLength = 0.2 + 0.8 * Math.random()
						const emitX = EMath.lerp(cursor.prevPosition.x, cursor.x, i / Math.max(1, emit))
						const emitY = EMath.lerp(cursor.prevPosition.y, cursor.y, i / Math.max(1, emit))

						particle.x = emitX
						particle.y = emitY
						particle.tween.x = emitX
						particle.tween.y = emitY
						particle.target.x = emitX + 10 * cursorSpeed * rLength * Math.cos(direction + rAngle)
						particle.target.y = emitY + 10 * cursorSpeed * rLength * Math.sin(direction + rAngle)
						particle.alpha = 1
					}

					emitCount = (emitCount + 1) % particlesRef.current.length
				}
			}

			// Update and draw particles
			for (const particle of particlesRef.current) {
				// Ensure particle exists before operating on it
				if (particle) {
					particle.tween.update(particle.target, deltaTime)

					// Calculate speed for size and opacity
					const speed = EMath.magnitude(particle.tween.velocity.x, particle.tween.velocity.y)

					// Add orbital movement like in p5aholic version
					const r = particleOrbitalRadius / EMath.constrain(speed, 0.01, 10)
					const angle = particle.seed * Math.PI * 2.0 + now * 0.0001
					particle.x = particle.tween.x + r * Math.cos(angle)
					particle.y = particle.tween.y + r * Math.sin(angle)

					// Update alpha and size based on speed
					particle.alpha = speed
					const dynamicSize = particle.size * speed * particleSpeedMultiplier

					// Draw particle
					if (particle.alpha > 0.01) {
						ctx.beginPath()
						ctx.arc(particle.x, particle.y, Math.max(0.5, dynamicSize), 0, Math.PI * 2)

						// Apply alpha to color
						const alpha = Math.min(particle.alpha, 1).toFixed(2)
						ctx.fillStyle =
							particle.color +
							Math.floor(Number.parseFloat(alpha) * 255)
								.toString(16)
								.padStart(2, '0')
						ctx.fill()
					}
				}
			}

			// Draw cursor follower
			ctx.beginPath()
			ctx.arc(cursor.x, cursor.y, cursor.radius, 0, Math.PI * 2)

			// Simple circle with opacity instead of gradient
			ctx.fillStyle = `rgba(255, 255, 255, ${cursorOpacity})`
			ctx.fill()

			// Continue animation loop
			animationFrameRef.current = requestAnimationFrame(animate)
		}

		// Start animation
		animationFrameRef.current = requestAnimationFrame(animate)

		// Cleanup
		return () => {
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current)
			}
			window.removeEventListener('resize', setCanvasSize)
			window.removeEventListener('mousemove', handleMouseMove)
			particlesRef.current = []
		}
	}, [
		numParticles,
		particleMinSize,
		particleMaxSize,
		particleSpeedMultiplier,
		particleEmissionRate,
		particleOrbitalRadius,
		cursorOpacity,
		springConstant,
		mass,
		dampingCoefficient,
		colors,
		tweenOmega,
	])

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				pointerEvents: 'none',
				zIndex: 50,
			}}
		/>
	)
}
