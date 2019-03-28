import { Link } from "gatsby"
import React from "react"

import Menu from "./menu"
import tokiotaHorizontal from './../assets/img/tokiota-horizontal.png';
import './header.scss'

const Header = () => (
  <header id="header">
    <Link to="/">
      <img className="logo" src={tokiotaHorizontal} alt="tokiota" />
    </Link>
    <Menu />
  </header>
)

export default Header
