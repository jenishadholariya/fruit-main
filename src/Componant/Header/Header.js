import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div className="top-header-area" id="sticker">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 text-center">
                        <div className="main-menu-wrap">
                            {/* logo */}
                            <div className="site-logo">
                                <a href="index.html">
                                    <img src="assets/img/logo.png" alt />
                                </a>
                            </div>
                            {/* logo */}
                            {/* menu start */}
                            <nav className="main-menu">
                                <ul>
                                    <li className="current-list-item">
                                        <NavLink className="current-list-item" to={"/Home"}>Home</NavLink>
                                        <ul className="sub-menu">
                                            <li><NavLink to={"/Static"}>Static Home</NavLink></li>
                                            <li><NavLink to={"/Slider"}>Slider Home</NavLink></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <NavLink to={"/About"}>About</NavLink>
                                    </li>
                                    <li><a href="#">Pages</a>
                                        <ul className="sub-menu">
                                            <li><NavLink href="404.html" to={"/Page404"}>404 page</NavLink></li>
                                            <li><NavLink href="about.html" to={"/About"}>About</NavLink></li>
                                            <li><NavLink href="cart.html" to={"/Cart"}>Cart</NavLink ></li>
                                            <li><NavLink href="checkout.html" to={"/Checkout"}>Check Out</NavLink></li>
                                            <li><NavLink href="contact.html" to={"/Contact"}>Contact</NavLink></li>
                                            <li><NavLink href="news.html" to={"/News"}>News</NavLink></li>
                                            <li><NavLink href="shop.html" to={"/Shop"}>Shop</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink href="news.html" to={"/News"}>News</NavLink>
                                        <ul className="sub-menu">
                                            <li><NavLink href="news.html" to={"/News"}>News</NavLink></li>
                                            <li><NavLink href="single-news.html" to={"/Singlenews"}>Single News</NavLink></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <NavLink to={"/Contact"}>Contact</NavLink>
                                    </li>
                                    <li><NavLink to={"/Shop"}>Shop</NavLink>
                                        <ul className="sub-menu">
                                            <li><NavLink href="shop.html" to={"/Shop"}>Shop</NavLink></li>
                                            <li><NavLink href="checkout.html" to={"/Checkout"}>Check Out</NavLink></li>
                                            <li><NavLink href="single-product.html" to={"/Singleproduct"}>Single Product</NavLink></li>
                                            <li><NavLink href="cart.html" to={"/cart"}>Cart</NavLink></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="header-icons">
                                            <NavLink className="shopping-cart" href="cart.html" to={"/Cart"}><i className="fas fa-shopping-cart" /></NavLink>
                                            <a className="mobile-hide search-bar-icon" href="#"><i className="fas fa-search" /></a>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <a className="mobile-show search-bar-icon" href="#"><i className="fas fa-search" /></a>
                            <div className="mobile-menu" />
                            {/* menu end */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Header;