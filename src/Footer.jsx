import logo from "./assets/logo.png";

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Footer__top">
                <div className="Footer__brand">
                    <img
                        className="Footer__logo"
                        src={logo}
                        alt="Dastarkhwan logo"
                    />
                    <h3>Dastarkhwan</h3>
                    <p>
                        Fresh flavors, warm hospitality, and memorable dining
                        experiences crafted every day.
                    </p>
                </div>

                <div className="Footer__links">
                    <h4>Explore</h4>
                    <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>About</li>
                        <li>Reservations</li>
                    </ul>
                </div>

                <div className="Footer__links">
                    <h4>Services</h4>
                    <ul>
                        <li>Private Dining</li>
                        <li>Catering</li>
                        <li>Takeaway</li>
                        <li>Events</li>
                    </ul>
                </div>

                <div className="Footer__contact">
                    <h4>Contact</h4>
                    <p>📍 24 Willow Street, New York</p>
                    <p>📞 +1 (212) 555-0198</p>
                    <p>✉️ info@myrestaurant.com</p>
                </div>
            </div>

            <div className="Footer__bottom">
                <p>© 2024 Dastarkhwan. All rights reserved.</p>
                <div className="Footer__socials">
                    <span>Instagram</span>
                    <span>Facebook</span>
                    <span>LinkedIn</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;