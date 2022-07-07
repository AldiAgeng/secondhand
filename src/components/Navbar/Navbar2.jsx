import { Link } from "react-router-dom";
import logo from "../../assets/images/imgLogo.png";

function Navbar2() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <Link to={'/'}>
                    <img className='logo' src={logo} alt="background" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <Link className="nav-link" to={'/login'}>
                            Log in
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={'/sign-up'}>
                            Sign up
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={'/product-detail'}>
                            product detail
                        </Link>
                        </li>     
                        <li className="nav-item">
                        <Link className="nav-link" to={'/info-penawar'}>
                            Info penawar
                        </Link>
                        </li>           
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar2;