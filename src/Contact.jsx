const Contact = () => {
    return (
        <main className="ContactPage">
            <section className="ContactHero">
                <p className="ContactHero__eyebrow">We’d love to hear from you</p>
                <h1>Let’s get in touch.</h1>
                <p>
                    Questions, ideas, or just want to say hello? Reach out and
                    we’ll be happy to help.
                </p>
            </section>

            <section className="ContactDetails" aria-label="Dastarkhwan contact details">
                <article className="ContactCard">
                    <span className="ContactCard__icon" aria-hidden="true">⌖</span>
                    <h2>Visit us</h2>
                    <p>24 Willow Street<br />New York</p>
                    <a
                        href="https://maps.google.com/?q=24+Willow+Street,+New+York"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Get directions
                    </a>
                </article>
                <article className="ContactCard">
                    <span className="ContactCard__icon" aria-hidden="true">☎</span>
                    <h2>Call us</h2>
                    <p>+1 (212) 555-0198</p>
                    <a href="tel:+12125550198">Call Dastarkhwan</a>
                </article>
                <article className="ContactCard">
                    <span className="ContactCard__icon" aria-hidden="true">✉</span>
                    <h2>Email us</h2>
                    <p>info@myrestaurant.com</p>
                    <a href="mailto:info@myrestaurant.com">Send an email</a>
                </article>
            </section>
        </main>
    );
};

export default Contact;
