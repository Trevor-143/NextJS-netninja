import Link from "next/link"

export default function NotFound() {
    return (
        <main className="text-center">
            <h2 className="text-3xl"> There was a problem </h2>
            <p>This link could not be found</p>
            <p> Get back to your <Link href='/'> Dashboard </Link></p>
        </main>
    )
}