import Header from "./components/layouts/header/Header.jsx";
import Footer from "./components/layouts/footer/Footer.jsx";
import Banner from "./components/banner/Banner.jsx";
import "./index.scss"
import { DATA } from "./constants/API.js";
import Hero from "./components/hero/Hero.jsx";

function App() {
  let bannerData = DATA?.map((el) => (
    <Banner
      key={el.id}
      {...el}
    />
  ));
  return (
    <>
      <Header />
      <Hero/>
      {bannerData}
      <Footer/>
    </>
  );
}

export default App;
