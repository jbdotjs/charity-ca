import { StaticImageData } from "next/image";

import features3Bg_1 from "@/assets/img/features/feature-bg-red.jpg";
import features3Bg_2 from "@/assets/img/features/feature-bg-green.jpg";
import features3Bg_3 from "@/assets/img/features/feature-bg-yellow.jpg";

interface DataType {
  id: number;
  page: string;
  icon_bg?: string;
  icon_name?: string;
  title: string;
  desc: string;
  btn_bg?: string;
  bg_img?: StaticImageData;
  item_bg?: string;
}

const features_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    icon_name: "flaticon-help",
    title: "Become an volunteer",
    desc: "The biggest donation you can give is your time. Become a volunteer and help those in need.",
  },
  {
    id: 2,
    page: "home_1",
    icon_name: "flaticon-solidarity",
    icon_bg: "feature-item__icon--green",
    title: "Quick Fundraising",
    desc: "Quickly raise funds for your cause. Share your story and start raising funds.",
  },
  {
    id: 3,
    page: "home_1",
    icon_name: "flaticon-donation",
    icon_bg: "feature-item__icon--yellow",
    title: "Start Donating",
    desc: "Your donation will help provide food, shelter, and education to those in need.",
  },
  {
    id: 4,
    page: "home_1",
    icon_name: "flaticon-solidarity",
    icon_bg: "feature-item__icon--green",
    title: "Quick Fundraising",
    desc: "Quickly raise funds for your cause. Share your story and start raising funds.",
  },

  // home one single features
  {
    id: 1,
    page: "single_features",
    title: "Child Education Help",
    desc: "Your little help can make the children smile, help them to get an education.",
  },
  {
    id: 2,
    page: "single_features",
    title: "Send a Dead Body to Home Country",
    desc: "Your donation will help a family to send their loved one's dead body to their home country.",
    btn_bg: "btn--yellow",
  },
  {
    id: 3,
    page: "single_features",
    title: "Help a Family",
    desc: "Many families are in need of help. Your donation will help a family in need.",
    btn_bg: "btn--green",
  },

  // home two

  {
    id: 1,
    page: "home_2",
    icon_name: "flaticon-help",
    title: "Become a volunteer",
    desc: "Morem ipsum is simply free text amet consectetuer adipiscing elit.",
  },
  {
    id: 2,
    page: "home_2",
    icon_name: "flaticon-donation",
    title: "Get Involved",
    desc: "Morem ipsum is simply free text amet consectetuer adipiscing elit.",
    item_bg: "feature-item--green",
  },
  {
    id: 3,
    page: "home_2",
    icon_name: "flaticon-solidarity",
    title: "Adopt a child",
    desc: "Morem ipsum is simply free text amet consectetuer adipiscing elit.",
    item_bg: "feature-item--yellow",
  },

  // home three

  {
    id: 1,
    page: "home_3",
    bg_img: features3Bg_1,
    icon_name: "flaticon-solidarity",
    title: "Get Inspire And Help",
    desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
  },
  {
    id: 2,
    page: "home_3",
    bg_img: features3Bg_2,
    icon_name: "flaticon-heart",
    title: "Send Us Donations",
    desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
  },
  {
    id: 3,
    page: "home_3",
    bg_img: features3Bg_3,
    icon_name: "flaticon-help",
    title: "Become a volunteer",
    desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
  },
];

export default features_data;
