interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
}
[];

const menu_data: MenuItem[] = [
  {
    id: 1,
    has_dropdown: false,
    title: "Home",
    link: "/",
    // sub_menus: [
    //     { link: "/", title: "Home One" },
    //     { link: "/home-two", title: "Home Two" },
    //     { link: "/home-three", title: "Home Three" },
    // ],
  },
  {
    id: 2,
    has_dropdown: false,
    title: "Causes",
    link: "/causes",
    // sub_menus: [
    //   { link: "/causes", title: "Causes" },
    //   { link: "/causes-slider", title: "Causes Slider" },
    //   { link: "/causes-details", title: "Causes Details" },
    // ],
  },
  // {
  //   id: 3,
  //   has_dropdown: false,
  //   title: "Events",
  //   link: "/events",
  //   // sub_menus: [
  //   //   { link: "/events", title: "Events" },
  //   //   { link: "/events-slider", title: "Events Slider" },
  //   //   { link: "/event-details", title: "Events Details" },
  //   // ],
  // },
  //   {
  //     id: 4,
  //     has_dropdown: true,
  //     title: "Portfolio",
  //     link: "#",
  //     sub_menus: [
  //       { link: "/portfolio", title: "Portfolio" },
  //       { link: "/portfolio-details", title: "Portfolio Details" },
  //       { link: "/donate", title: "Donate" },
  //     ],
  //   },
  {
    id: 4,
    has_dropdown: true,
    title: "About",
    link: "/about",
    sub_menus: [
      { link: "/about", title: "About Us" },
      { link: "/contact", title: "Contact Us" },
      { link: "/become-volunteers", title: "Become Volunteer" },
    ],
  },
  //   {
  //     id: 4,
  //     has_dropdown: false,
  //     title: "About Us",
  //     link: "/about",
  //   },
  //   {
  //     id: 5,
  //     has_dropdown: false,
  //     title: "Contact Us",
  //     link: "/contact",
  //   },
  // {
  //     id: 6,
  //     has_dropdown: false,
  //     title: "Volunteers",
  //     link: "/volunteers",
  // },
  //   {
  //     id: 7,
  //     has_dropdown: false,
  //     title: "Become Volunteer",
  //     link: "/become-volunteers",
  //   },
  {
    id: 8,
    has_dropdown: false,
    title: "FAQs",
    link: "/faqs",
  },
  //   {
  //     id: 10,
  //     has_dropdown: true,
  //     title: "Pages",
  //     link: "#",
  //     sub_menus: [
  //       { link: "/about", title: "About Us" },
  //       { link: "/contact", title: "Contact Us" },
  //       { link: "/volunteers", title: "Volunteers" },
  //       { link: "/become-volunteers", title: "Become Volunteer" },
  //       { link: "/faqs", title: "FAQ Page" },
  //       { link: "/not-found", title: "404 Error" },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     has_dropdown: true,
  //     title: "Blog",
  //     link: "#",
  //     sub_menus: [
  //       { link: "/blog", title: "Blog" },
  //       { link: "/blog-clasic", title: "Blog Clasic" },
  //       { link: "/blog-slider", title: "Blog Slider" },
  //       { link: "/blog-details", title: "Blog Details" },
  //     ],
  //   },
];
export default menu_data;
