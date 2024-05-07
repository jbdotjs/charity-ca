import { StaticImageData } from "next/image";

import authorImg_1 from "@/assets/img/testimonials/author1.jpg";
import authorImg_2 from "@/assets/img/testimonials/author2.jpg";
import authorImg_3 from "@/assets/img/testimonials/author3.jpg";

import quoteIcon_1 from "@/assets/img/testimonials/quote-icon1.png";
import quoteIcon_2 from "@/assets/img/testimonials/quote-icon2.png";
import quoteIcon_3 from "@/assets/img/testimonials/quote-icon3.png";

interface DataType {
  id: number;
  page: string;
  desc: string;
  name: string;
  designation: string;
  rating?: string[];
  img?: StaticImageData | undefined;
  item_bg?: string;
  quote_icon?: StaticImageData;
}

const testimonial_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    desc: "These guys are doing wonderful job and I'm amazed by the network they've built in such a short span of time.",
    name: "Paul Flavius",
    designation: "Doner, Canada",
  },
  {
    id: 2,
    page: "home_1",
    desc: "The team is doing a great job and I'm happy to be a part of this network. Let's make this world a better place.",
    name: "Clifford Smith",
    designation: "Doner, Canada",
  },
  {
    id: 3,
    page: "home_1",
    desc: "Such a great initiative and I'm happy to contribute. Their cause really resonates with me and I'm looking forward to contribute more in the future.",
    name: "Ahmed Ali",
    designation: "Doner, Canada",
  },
  {
    id: 4,
    page: "home_1",
    //  Pitch:
    //   We are a non-profit organization that works for the welfare of
    //  the Muslim community. We are dedicated to helping the less
    //  fortunate and providing them with the resources they need to
    //  live a better life. Our goal is to create a better world for
    //  everyone.
    //  Based on the pitch, the testimonial should be according to it.
    desc: "The CrescentCanada team is doing a great job in helping the less fortunate. They are dedicated to making an impact.",
    name: "John Sonmez",
    designation: "Doner, Canada",
  },
  //   {
  //     id: 5,
  //     page: "home_1",
  //     desc: "",
  //     name: "Ralph Alfred",
  //     designation: "Doner, Canada",
  //   },

  // home two

  {
    id: 1,
    page: "home_2",
    desc: "Available, but the majority have suffered alteroform, by injected humour, or randomised wwhdon't oeven slightly believable.you are going to use a ne of the more obscure Latin",
    name: "Robart Jonson",
    designation: "Doner, Canada",
    rating: [
      "flaticon-star",
      "flaticon-star",
      "flaticon-star",
      "flaticon-star",
      "flaticon-star",
    ],
  },
  {
    id: 2,
    page: "home_2",
    desc: "A ne of the more obscure Latin You are going to use. Available, but the majority have suffered alteration soform, by injected humour, or randomised words whdon't look even htly.",
    name: "Jesse Rayford",
    designation: "Doner, Canada",
    rating: [
      "flaticon-star",
      "flaticon-star",
      "flaticon-star",
      "flaticon-star",
      "flaticon-star",
    ],
  },
  {
    id: 3,
    page: "home_2",
    desc: "Randomised words whdon't look even htly believable Available, but the majority have suffered alteration soform, by injected humour, a ne of the more obscure Latin or you are going.",
    name: "Ralph Alfred",
    designation: "Doner, Canada",
    rating: [
      "flaticon-star",
      "flaticon-star",
      "flaticon-star",
      "flaticon-star",
      "flaticon-star",
    ],
  },

  // home three

  {
    id: 1,
    page: "home_3",
    desc: "I was very impresed by thcompanyservice lore ipsu isimply free text used by copy typing refreshing. Neque porro",
    name: "Jenny Wilson",
    designation: "Doner, Canada",
    img: authorImg_1,
    quote_icon: quoteIcon_1,
  },
  {
    id: 2,
    page: "home_3",
    desc: "I was very impresed by thcompanyservice lore ipsu isimply free text used by copy typing refreshing. Neque porro",
    name: "Wade Warren",
    designation: "Doner, Canada",
    img: authorImg_2,
    item_bg: "item--green",
    quote_icon: quoteIcon_2,
  },
  {
    id: 3,
    page: "home_3",
    desc: "I was very impresed by thcompanyservice lore ipsu isimply free text used by copy typing refreshing. Neque porro",
    name: "Jenny Wilson",
    designation: "Doner, Canada",
    img: authorImg_3,
    item_bg: "item--yellow",
    quote_icon: quoteIcon_3,
  },
];

export default testimonial_data;
