import React from "react";
import style from "./Nav.module.css";
import { VscAccount } from "react-icons/vsc";
import { IoCart } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";


const Nav = () => {
  return (
    <div>
      <div>
        <header className={style.hd}>
          <h2 className={style.anme}>AgroKart</h2>

          <nav>
            <ul>
              <li>
                <span>
                  <a href="/">
                    <IoMdHome className={style.icon} />
                    HOME
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <a href="/Cart">
                    <IoCart className={style.icon} />
                    CART
                  </a>
                </span>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Nav;
