
const Footer = () => {
    return (
        <div className="mt-20 bg-neutral text-neutral-content">
            <footer className="footer p-10 ">
                <nav>
                    <h6 className="footer-title">Contact Us</h6>
                    <a className="link link-hover">Dhaka Bangladesh</a>
                    <a className="link link-hover">speciality@gmail.com</a>
                    <a className="link link-hover">01308-000000</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Properties Types</h6>
                    <a className="link link-hover">Apartment</a>
                    <a className="link link-hover">Restaurant</a>
                    <a className="link link-hover">My Houses</a>
                    <a className="link link-hover">Villa </a>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Properties Details</a>
                    <a className="link link-hover">Privacy Policy</a>
                </nav>
            </footer>
                <h1 className="mt-10 pb-7 text-center">© speciality 2024</h1>
        </div>
    );
};

export default Footer;