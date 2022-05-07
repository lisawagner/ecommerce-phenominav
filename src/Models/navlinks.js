import {
  MdAdd,
  MdRemove,
  } from 'react-icons/md'


export const NAVLINKS = [
  {
    id: "01",
    name: "Home",
    url: "/",
    iconClose: <MdRemove />,
    iconOpen: <MdAdd />
    // submenu: [{}]
  },
  {
    id: "02",
    name: "Collections",
    url: "/favourites",
    iconClose: <MdRemove />,
    iconOpen: <MdAdd />,
    submenu: [
      {
        name: "Essentials 2022",
        url: "/collections"
      },
      {
        name: "Couture Cafe",
        url: "/collections"
      },
      {
        name: "Pandemica",
        url: "/collections"
      },
      {
        name: "Apoc",
        url: "/collections"
      },
    ]
  },
  {
    id: "03",
    name: "Clothing",
    url: "/products",
    iconClose: <MdRemove />,
    iconOpen: <MdAdd />,
    submenu: [
      {
        name: "Tops",
        url: "/cart"
      },
      {
        name: "Pants",
        url: "/cart"
      },
      {
        name: "Sweaters",
        url: "/cart"
      },
      {
        name: "Coats + Jackets",
        url: "/cart"
      },
      {
        name: "Dresses",
        url: "/cart"
      },
      {
        name: "Shirts",
        url: "/cart"
      },
      {
        name: "Skirts",
        url: "/cart"
      },
    ]
  },
  {
    id: "04",
    name: "Accessories",
    url: "/products",
    iconClose: <MdRemove />,
    iconOpen: <MdAdd />,
    submenu: [
      {
        name: "Bags",
        url: "/products"
      },
      {
        name: "Hats",
        url: "/products"
      },
      {
        name: "Belts",
        url: "/products"
      },
      {
        name: "Scarves",
        url: "/products"
      },
      {
        name: "Jewelry",
        url: "/products"
      },
      {
        name: "Watches",
        url: "/products"
      },
      {
        name: "Wallets",
        url: "/products"
      },
      {
        name: "Shoes",
        url: "/products"
      },
      {
        name: "Socks",
        url: "/products"
      },
    ]
  },
  {
    id: "05",
    name: "Essence of Phenomena",
    url: "/phenomena",
    iconClose: <MdRemove />,
    iconOpen: <MdAdd />,
    submenu: [
      {
        name: "Storybook",
        url: "/phenomena"
      },
      {
        name: "The World of Phenomena",
        url: "/phenomena"
      },
      {
        name: "Circle of Life",
        url: "/phenomena"
      },
      {
        name: "Manifesto",
        url: "/phenomena"
      },
    ]
  },
  {
    id: "06",
    name: "Contact",
    url: "#contact",
    iconClose: <MdRemove />,
    iconOpen: <MdAdd />
    // submenu: [{}]
  },
]
