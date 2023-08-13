import Link from "next/link"
import UserProfile from "./userProfile"

export default function Header() {
    return(
        <header className='header shadow'>
        <div className='branding'>
        <Link href="/">
        Onboard
        </Link>
        </div>
        <nav className='navigation'>
        {/* Add navigation links here */}
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/register">Register</Link>
        {/* ... other links ... */}
        </nav>
        <div className='userProfile'>
        {/* Profile icon, login, and logout functionality here */}
        <UserProfile />
        </div>
        </header>
    )
};