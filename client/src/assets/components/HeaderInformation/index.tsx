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
        <>
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
            <div className="header-content-books">
                <div className="header-content-books_title">
                    <h2>Книги победы</h2>
                </div>
                <div className="header-content-books_hrefs">
                    <a href="https://pobeda.ryazan.gov.ru/files/vov_v75.pdf">75 лет книга победы</a>
                    <a href="https://pobeda.ryazan.gov.ru/files/vov_svod_v70.pdf">70 лет книга победы</a>
                    <a href="https://pobeda.ryazan.gov.ru/files/RO_vov.pdf">Годы ВОВ в Рязанской области</a>
                </div>
            </div>
        </>
    );
}
