import Link from "next/link"

export default function NotFound() {
    return (
        <main className="text-center">
            <h2 className="text-3xl"> There was a problem </h2>
            <p>Ticket not available or its just unknown</p>
            <p> See all available <Link href='/tickets'> tickets </Link></p>
        </main>
    )
}