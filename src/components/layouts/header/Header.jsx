import { headerLeftItems } from "../../../constants/headerItems";
import { headerRightItems } from "../../../constants/headerItems";
import "./header.scss";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className="nav__left">
          <a href="../../index.html" className="nav__logo">
            <img
              src="https://static.vecteezy.com/system/resources/previews/014/018/566/non_2x/samsung-logo-on-transparent-background-free-vector.jpg"
              alt=""
            />
          </a>
          <ul className="nav__left__list">
            {headerLeftItems.map((el, inx) => (
              <li className="nav__list__item" key={inx}>
                <a href="#" className="nav__list__link">
                  {el}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav__right">
          <ul className="nav__right__list">
            {headerRightItems.map((el, inx) => (
              <li className="nav__list__item" key={inx}>
                <a href="#" className="nav__list__link">
                  {el}
                </a>
              </li>
            ))}
          </ul>
          <GiHamburgerMenu className="nav__hamburger"/>
          <div className="nav__btns">
            <IoSearch />
            <MdOutlineShoppingCart />
            <CiUser />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
