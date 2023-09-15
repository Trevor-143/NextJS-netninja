import Image from 'next/image'
import Link from 'next/link'
import Logo from './dojo-logo.png'

export default function NavBar () {
    return (
        <nav>
            <Image
            src={Logo}
            alt='desk logo'
            width={70}
            quality={100}
            placeholder='blur'
            />
          <h2>The navigation</h2>
          <Link href="/" >Home</Link>
          <Link href="/tickets">Tickets</Link>
          <Link href="/tickets/create">Create Ticket</Link>
        </nav>
    )
}