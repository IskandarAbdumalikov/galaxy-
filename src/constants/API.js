import tvImage from "../images/tvImage.png"
import s24 from "../images/s24.png";
import kitchen from "../images/kitchen.png";


export const DATA = [
  {
    id: 1,
    name: "Mobile & Computing",
    bg: "#C5D7E3",
    color: "black",
    url: s24,
    price: 1.04,
    items: [
      "Galaxy S24 Ultra Bundle ",
      "Galaxy S24+",
      "Galaxy Tab S9 series",
      "Galaxy Watch6 series",
    ],
    title: "Save up to $1,040",
    desc: "With Galaxy S24 Ultra, Watch6, Buds2 Pro and instant trade-in credit.",
    btnStyle: {
      color: "white",
      backgroundColor: "black",
    },
  },
  {
    id: 2,
    name: "TV & Audio",
    bg: "#08090B",
    color: "white",
    url: tvImage,
    price: 1.04,
    items: ["Q99OD Soundbar", "Crystal UHD DU9000 98", "Music Frame"],
    title: "Our best-of-the-best audio",
    desc: "Experience pure auditory elevation with the powerful new Q990D soundbar, featuring Wireless Dolby Atmos.",
    btnStyle: {
      color: "black",
      backgroundColor: "white",
    },
  },
  {
    id: 3,
    name: "Home Appliances",
    bg: "#F7F7F7",
    color: "black",
    url: kitchen,
    price: 1.04,
    items: ["Bundle deals", "Bespoke Refrigerators", "Bespoke Laundry"],
    title: "Refresh with your dream kitchen",
    desc: "Bundle and save up to $1,500  - or more. Plus, get 2 years of Samsung Care+ for $1 with select purchase.",
    btnStyle: {
      color: "white",
      backgroundColor: "black",
    },
  },
  {
    id: 3,
    name: "Sustainability",
    bg: `url(https://images.samsung.com/is/image/samsung/assets/us/home/04232024/BeautifulPlanet_HP_DT_1440x810.jpg?$1440_810_JPG$) no-repeat center/cover`,
    color: "white",
    url: "none",
    price: 1.04,
    items: ["Sweepstakes", " Certified Re-Newed", " How to recycle"],
    title: "Share sunset photos for a chance to win prizes",
    desc: "Bundle and save up to $1,500  - or more. Plus, get 2 years of Samsung Care+ for $1 with select purchase.",
    btnStyle: {
      color: "black",
      backgroundColor: "white",
    },
  },
];
