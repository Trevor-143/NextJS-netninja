import Link from "next/link"

export default function NotFound() {
    return (
        <main className="text-center">
            <h2 className="text-3xl"> There was a problem </h2>
            <p>It seems we couldn't find this ticket</p>
            <p> See all available <Link href='/tickets'> tickets </Link></p>
        </main>
    )
}