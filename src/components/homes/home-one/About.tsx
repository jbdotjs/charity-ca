import Image from "next/image";
import Link from "next/link";
import counter_data from "@/data/counterData";
import Count from "@/components/common/Count";

import aboutImg_1 from "@/assets/img/about/about1.jpg";
import aboutImg_2 from "@/assets/img/about/about2.jpg";
import aboutImg_3 from "@/assets/img/about/about3.jpg";

const About = () => {
  return (
    <div className="about-area py-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-image-part">
              <div className="row">
                <div className="col-sm-6">
                  <div className="image">
                    <Image
                      src={{
                        src: "https://source.unsplash.com/305x418/?donation,islam",
                        width: 305,
                        height: 418,
                      }}
                      //  src={aboutImg_1}
                      alt="About"
                    />
                  </div>
                  <div className="project-complete mb-30">
                    <div className="project-complete__icon">
                      <i className="flaticon-charity"></i>
                    </div>
                    <div className="project-complete__content">
                      <h5>15+ Projects</h5>
                      <span>For the Ummah!</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="image mt-65 rmt-15 rel">
                    <Image
                      src={
                        //   aboutImg_2
                        {
                          src: "https://source.unsplash.com/305x229/?donation,muslim",
                          width: 305,
                          height: 229,
                        }
                      }
                      alt="About"
                    />
                    <div className="experiences-years">
                      <span className="experiences-years__number">15</span>
                      <span className="experiences-years__text">
                        Years Experiences
                      </span>
                    </div>
                  </div>
                  <div className="image">
                    <Image
                      src={
                        //   aboutImg_3
                        {
                          src: "https://source.unsplash.com/305x229/?donation,islam",
                          width: 305,
                          height: 229,
                        }
                      }
                      alt="About"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content-part rmt-65">
              <div className="section-title mb-60">
                <span className="section-title__subtitle mb-10">About us</span>
                <h2>
                  Check what makes us different <span>than others</span>
                </h2>
              </div>
              <p>
                We are a non-profit organization that works for the welfare of
                the Muslim community. We are dedicated to helping the less
                fortunate and providing them with the resources they need to
                live a better life. Our goal is to create a better world for
                everyone.
              </p>
              {counter_data
                .filter((item) => item.page === "home_1")
                .map((item) => (
                  <div key={item.id} className="counter-item counter-text-wrap">
                    <div className={`counter-item__icon ${item.icon_bg}`}>
                      <i className={item.icon}></i>
                    </div>
                    <div className="counter-item__content">
                      <span
                        className="count-text"
                        data-speed="3000"
                        data-stop="45000"
                      >
                        <Count number={item.counter_number} />
                      </span>
                      <span className="counter-title">{item.title}</span>
                    </div>
                  </div>
                ))}
              <Link className="cr-btn ml-5 mt-25" href="/about">
                Didcover more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
