import Link from "next/link"

const Header = () => {
    return (
        <header className="bg-black p-5">
            <div className="container flex justify-between mx-auto text-white">
                <h1 className="flex font-serif text-2xl"><img src="coffee-icon.png" alt="coffee-icon" className="w-10" />Del cafe</h1>
                <ul className="flex gap-5 text-base md:text-xl">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/menu">Menu</Link></li>
                    <li><Link href="job-info">求人情報</Link></li>
                </ul>
            </div>
        </header>
    )
}
export default Header