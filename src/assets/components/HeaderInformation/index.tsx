import React from "react";
import './css/style.css';
import logo from '../../images/logo.048bcec7.png';
import formHref from '../../images/logo-stat.c8a3efcf.png'

/**
 * Информация шапки
 * @returns компонент "Информация шапки"
 */
export function HeaderInformation() {

    return (
        <div className="header-information">
            <div className="header-information_logo">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="white">ЛЮДИ</h1>
                <h1 className="red">ПОБЕДЫ</h1>
            </div>
            <div className="header-information_form">
                <a href="https://forms.yandex.ru/u/662b99e384227cc953107e72/">
                    <img src={formHref} alt="форма яндекса" />
                </a>
            </div>
        </div>
    );
}
