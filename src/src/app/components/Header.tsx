const Header = () => {
    return (
        <header className="bg-black py-5">
            <div className="container flex justify-between mx-auto text-white">
                <h1 className="flex font-serif text-xl"><img src="coffee-icon.png" alt="coffee-icon" className="w-10" />Del cafe</h1>
                <ul className="flex gap-2">
                    <li>about</li>
                    <li>abc</li>
                </ul>
            </div>
        </header>
    )
}
export default Header