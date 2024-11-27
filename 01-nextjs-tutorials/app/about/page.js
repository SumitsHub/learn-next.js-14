import Link from "next/link"

const AboutPage = () => {
  return (
    <div>
        <h1 className="text-7xl">AboutPage</h1>

        <Link href="/" className="text-2xl">Home Page</Link>
    </div>
  )
}
export default AboutPage

// NOTE: this page won't get rendered, redirecting to '/' from middleware