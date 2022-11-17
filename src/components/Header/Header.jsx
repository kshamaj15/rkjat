import React from "react";

import classes from './Header.module.scss';
import logo from '../../Assets/favicon.png';

import $ from 'jquery';

const Header = () => {

    $(window).scroll(function () {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('section').each(function (i) {
                // The number at the end of the next line is how pany pixels you from the top you want it to activate.
                // console.log({ windscroll });
                // console.log({ thisPosition: $(this).position().top });
                if ($(this).position().top <= windscroll) {
                    $('nav li.active').removeClass('active');
                    $('nav li').eq(i).addClass('active');
                }
            });

        } else {

            $('nav li.active').removeClass('active');
            $('nav li:first').addClass('active');
        }

    }).scroll();


    return (
        <header className={classes.header}>
            <div>
                {/* <img src={logo} height='50px' alt="logo" /> */}
            </div>
            <nav className={classes.nav}>
                <li className={classes.tab}><a href="#about">About</a></li>
                <li className={classes.tab}><a href="#blog">Blog</a></li>
                <li className={classes.tab}><a href="#content">Content</a></li>
                <li className={classes.tab}><a href="#contact">Contact</a></li>
            </nav>
        </header>
    )

}

export default Header;