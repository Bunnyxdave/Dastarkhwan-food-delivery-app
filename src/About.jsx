const About = () => {
    return (
        <main className="AboutPage">
            <section className="AboutHero">
                <div className="AboutHero__content">
                    <p className="AboutHero__eyebrow">Our story</p>
                    <h1>A table full of stories, made to be shared.</h1>
                    <p>
                        Dastarkhwan brings people together over thoughtful cooking,
                        familiar flavours, and the joy of discovering something new.
                    </p>
                </div>
            </section>

            <section className="AboutStory">
                <div className="AboutStory__image" role="img" aria-label="Freshly prepared meal shared at a table" />
                <div className="AboutStory__content">
                    <p className="AboutHero__eyebrow">Food with feeling</p>
                    <h2>Good food is better when it brings us together.</h2>
                    <p>
                        Dastarkhwan takes its name from the shared table: a place
                        where a meal becomes a moment and everyone is welcome.
                        We help you discover local restaurants and the dishes
                        worth gathering around.
                    </p>
                    <p>
                        From comforting classics to bold new favourites, there’s
                        always something delicious waiting to be found.
                    </p>
                </div>
            </section>

            <section className="AboutValues">
                <div>
                    <span className="AboutValues__number">01</span>
                    <h3>Made for sharing</h3>
                    <p>Great meals bring friends, families, and neighbours closer.</p>
                </div>
                <div>
                    <span className="AboutValues__number">02</span>
                    <h3>Rooted in flavour</h3>
                    <p>Explore food traditions and local favourites, one meal at a time.</p>
                </div>
                <div>
                    <span className="AboutValues__number">03</span>
                    <h3>Always welcoming</h3>
                    <p>There’s room at the table for every taste and every occasion.</p>
                </div>
            </section>
        </main>
    );
};

export default About;
