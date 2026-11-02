const Hero = () => {
    return (
        <section id="about" className="hero" aria-labelledby="hero-title">
            <div className="container hero__grid">
                <div className="hero__text">
                    <h1 id="hero-title" className="hero__title">
                        Hi, I’m<br />Sounak Saha
                    </h1>

                    <p className="hero__lede">
                        AI engineer at Docglasses.ai, running fine&#8209;tuned LLMs on smartphones.
                    </p>

                    <div className="hero__actions">
                        <a href="#projects" className="btn">
                            View my work
                        </a>
                        <a href="#contact" className="btn btn--quiet">
                            Contact me
                        </a>
                    </div>
                </div>

                <figure className="hero__photo">
                    <img
                        src="/profile.jpg"
                        alt="Sounak Saha, smiling, in a grey T-shirt and glasses"
                        width={690}
                        height={752}
                        fetchPriority="high"
                    />
                </figure>
            </div>
        </section>
    );
};

export default Hero;
