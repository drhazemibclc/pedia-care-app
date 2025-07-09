import Link from 'next/link'

const Logo = () => {
	return (
		<Link
			className="font-bold text-2xl text-primary"
			href="/"
		>
			{/* Updated logo text for your Pedia App */}
			Pedia App
		</Link>
	)
}

export default Logo
