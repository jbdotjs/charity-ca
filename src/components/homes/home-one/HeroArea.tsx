import Link from "next/link";

const HeroArea = () => {
  return (
    <div
      className="hero-area bgs-cover overlay pt-155 pb-170"
      // style={{ backgroundImage: `url(/assets/img/hero/hero.jpg)` }}
      // random image from unsplash
      style={{
        backgroundImage: `url(https://source.unsplash.com/1600x900/?donation)`,
      }}
    >
      <div className="container container-1370">
        <div className="hero-content text-center text-white">
          <h1>
            Donations even if it is a small can bring <span>bigger</span>{" "}
            change.
          </h1>
          <p>
            Only when the society comes together and contributes to the welfare
            of the less fortunate, can we truly make a difference.
          </p>
          <div className="hero-btns pt-30 rpt-10">
            <Link className="cr-btn" href="/contact">
              {/* /donate */}
              Donate Now
            </Link>
            <Link className="cr-btn btn--yellow btn--style-two" href="/contact">
              Contac us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
