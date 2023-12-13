import { Link } from "react-router-dom";
import Logo from "./Logo";

const NavMenu = () => {
    return (
        <nav className="bg-primary">
            <Logo />

            <div className="flex items-center justify-center h-20 sm:h-18 mx-auto uppercase font-inter text-tertiary text-xl sm:text-md links">
                <Link className="mr-8 sm:mr-4 nav-link active" to="/" aria-current="page">Beranda</Link>
                <Link className="nav-link" to="/tentang-kami">Tentang Kami</Link>
            </div>
        </nav>
    )
}

export default NavMenu;