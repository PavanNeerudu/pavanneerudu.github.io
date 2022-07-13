import { Link } from 'react-scroll'
import '../styles/navbar.css'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <a class="navbar-brand" href="#">Pavan Neerudu</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link to="home" spy={true} smooth={true} ><a class="nav-link">Home</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="linktohome" spy={true} smooth={true} ><a class="nav-link">About</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="timeline" spy={true} smooth={true} ><a class="nav-link">TimeLine</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="projects" spy={true} smooth={true} ><a class="nav-link">Projects</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="contact" spy={true} smooth={true} ><a class="nav-link">Contact</a></Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
export default Navbar;