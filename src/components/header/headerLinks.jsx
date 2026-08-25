const HeaderLinks = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Shop",
    subLinks: [
      {
        name: "New Arrivals",
        path: "/shop/new",
      },
      {
        name: "Top Selling",
        path: "/shop/bestsellers",
      },
      {
        name: "Discounts",
        path: "/shop/offers",
      },
    ],
  },

  {
    name: "Categories",

    subLinks: [
      {
        name: "Devices",
        path: "/categories/devices",
      },
      {
        name: "Medicines",
        path: "/categories/medicines",
      },
      {
        name: "Cosmetics",
        path: "/categories/cosmetics",
      },
    ],
  },

  {
    name: "Elements",
    subLinks: [
      {
        name: "FAQ",
        path: "/elements/FAQ",
      },
      {
        name: "About Us",
        path: "/elements/about",
      },
      {
        name: "Contact Us",
        path: "/elements/contact",
      },
    ],
  },
];

export default HeaderLinks;
