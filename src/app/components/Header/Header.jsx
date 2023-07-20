import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <section className="header container-fluid bg-dark">
      <div className="header__content container d-flex justify-content-between align-items-center">
        <div className="header__logo">
          <Link href="/">
            <img
              src="https://www.vinhphucplus.com/wp-content/uploads/2019/07/top-5-cua-hang-ban-iphone-o-vinh-phuc-uy-tin-va-chat-luong-nhat-283.jpg"
              alt=""
              width={130}
              height={80}
            />
          </Link>
        </div>
        <div className="header__navbar text-white fw-bold">
          <div className="header__navbar-link ms-3 d-inline">
            <Link href="/cart">
              Your cart
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
          </div>
          <div className="header__navbar-link ms-3 d-inline">
            <Link href="/contact">Contact</Link>
          </div>
          <div className="header__navbar-link ms-3 d-inline">
            <Link href="">Login</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
