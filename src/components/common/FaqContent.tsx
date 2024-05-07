import Image from "next/image";
import Count from "./Count";

import faqThumb from "@/assets/img/about/faq-left.png";
import { BRANDING } from "@/data/branding";

const FaqContent = () => {
  return (
    <>
      <Image
        src={
          //   faqThumb
          {
            src: "https://source.unsplash.com/672x726?mosque",
            width: 672,
            height: 726,
          }
        }
        alt="Man"
      />
      <div className="experiences-years">
        <span className="experiences-years__number">{BRANDING.YEARS_EXP}</span>
        <span className="experiences-years__text">Years Experiences</span>
      </div>
      <div className="counter-item counter-text-wrap">
        <div className="counter-item__content">
          <span
            className="count-text"
            data-speed="3000"
            data-stop={BRANDING.VOLUNTEERS_NUM}
          >
            <Count number={BRANDING.VOLUNTEERS_NUM} />
          </span>
          <h5 className="counter-title">Volunteers</h5>
        </div>
      </div>

      <div className="project-complete">
        <div className="project-complete__icon">
          <i className="flaticon-charity"></i>
        </div>
        <div className="project-complete__content">
          <h5>We have completed {BRANDING.PROJECTS_NUM}+ Projects</h5>
          <span>Donet for charity</span>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
