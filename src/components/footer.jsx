import '../styles/footer.css'
import '../styles/fa-icons.css'
import { Link } from 'react-scroll'

function Footer() {
    return (
        <div id="footer">
            <footer class="footer-distributed">
                <div class="footer-left">
                    <h3>Pavan Neerudu</h3>
                    <p class="footer-links">
                        <Link to="home" spy={true} smooth={true} ><a class="link-1">Home</a> |</Link>
                        <Link to="linktohome" spy={true} smooth={true} ><a>About</a> |</Link>
                        <Link to="timeline" spy={true} smooth={true} ><a> TimeLine</a> | </Link>
                        <Link to="projects" spy={true} smooth={true} ><a> Projects</a> | </Link>
                        <Link to="contact" spy={true} smooth={true} ><a> Contact</a></Link>
                    </p>
                    <p class="footer-company-name">PavanNeerudu © 2022</p>
                </div>
                <div class="footer-center">
                    <div>
                        <i class="fa-solid fa-location-dot"></i>
                        <p><span>Hyderabad</span> Telangana, India</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-phone"></i>
                        <p>+91 9701377265</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-message"></i>
                        <p><a href="mailto:pkrdyn@gmail.com">pkrdyn@gmail.com</a></p>
                    </div>
                </div>
                <div class="footer-right">
                    <p class="footer-company-about"><span>Reach out to me here 👇</span></p>
                    <div class="footer-icons">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/pavan-kalyan-reddy-neerudu-56850a1a4/"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/pavanNeerudu"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;

