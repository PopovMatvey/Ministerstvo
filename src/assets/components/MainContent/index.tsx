import React from "react";
import "./css/style.css";
import logoUser from "../../images/user.jpg"
import lupa from "../../images/lupa.png"
import book from "../../images/book.png"
import ribnoe from "./images/ribnoe-region.svg";
import klepikovskiy from "./images/klepilovskiy-region.svg"
// import { Route, Routes } from 'react-router-dom';
// import russia from "./images/russia.svg";

export function MainContent() {
    const arrayRegions = [
        "Александро - Невский район",
        "Ермишинский район",
        "Захаровский район",
        "Кадомский район",
        "Касимовский район",
        "Клепиковский район",
        "Кораблинский район",
        "Милославский район",
        "Михайловский район",
        "Пителинский район",
        "Пронский район",
        "Путятинский район",
        "Рыбновский район",
        "Ряжский район",
        "Рязанский район",
        "Сапожковский район",
        "Сараевский район",
        "Сасовский район",
        "Скопинский район", "Спасский район",
        "Старожиловский район",
        "Ухоловский район",
        "Чучковский район",
        "Шацкий район",
        "Шиловский район"
    ];

    /***
     * 
     */
    const handlerOnClickSideMenuButton = () => {

    }

    return (
        <>
            <div className="main-content">
                <div className="main-content_container">
                    <div className="main-content_container_slide-menu">
                        <div className="main-content_container_slide-menu__humans">
                            <h3>Люди</h3>
                            <div className="main-content_container_slide-menu__humans_container">
                                <div className="main-content_container_slide-menu__humans_container_input-row">
                                    <button>
                                        <img src={lupa} alt="лупа" />
                                    </button>
                                    <input type="text" />
                                </div>
                                <div className="main-content_container_slide-menu__humans_container_user">
                                    <img src={logoUser} alt="user" />
                                    <div className="main-content_container_slide-menu__humans_container_user__text">
                                        <h4>К. АЛИХАНОВ</h4>
                                        <span>С 10.09.1941Г. МОБИЛИЗОВАН В РЯДЫ РАБОЧЕ...</span>
                                    </div>
                                </div>
                                <div className="main-content_container_slide-menu__humans_container_user">
                                    <img src={logoUser} alt="user" />
                                    <div className="main-content_container_slide-menu__humans_container_user__text">
                                        <h4>К. АЛИХАНОВ</h4>
                                        <span>С 10.09.1941Г. МОБИЛИЗОВАН В РЯДЫ РАБОЧЕ...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main-content_container_slide-menu__cities">
                            <h3>Города</h3>
                            <div className="main-content_container_slide-menu__cities_container">
                                {arrayRegions.map((element: any, index: number) => (
                                    <span>{element}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="main-content_map">
                        {/* <img src={ribnoe} alt="Рыбное" /> */}
                        {/* <img src={klepikovskiy} alt="Клепиковский" /> */}
                        {/* <svg className="youtube-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                        </svg> */}
                        

                        {/* <a href="//commons.wikimedia.org/wiki/User:%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80_%D0%92" title="User:Виктор В">Виктор В</a> - This W3C-unspecified <a href="https://en.wikipedia.org/wiki/Vector_images" className="extiw" title="w:Vector images">vector image</a> was created with <a href="https://en.wikipedia.org/wiki/Inkscape" className="extiw" title="w:Inkscape">Inkscape</a> ., Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=11328165">Link</a> */}
                    </div>
                </div>
                {/* <div className="slide-menu-container_hrefs">
                     <button>Книги победы</button>           
                </div> */}
                <div className="slide-menu-container">
                    <button onClick={handlerOnClickSideMenuButton}>Книги победы <img src={book} alt="книга" /></button>
                </div>
            </div>
        </>
    )
}