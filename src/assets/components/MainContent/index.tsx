import React, { useState } from "react";
import "./css/style.css";
import logoUser from "../../images/user.jpg"
import lupa from "../../images/lupa.png"
import book from "../../images/book.png"
import ribnoe from "./images/ribnoe-region.svg"
import klepikovskiy from "./images/klepilovskiy-region.svg"
import ryazanRegion from "./images/ryazan-region.svg"
import ryazanRegionMap from "./images/ryazan-region-map.svg"
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

    const [stateViewBooks, setStateViewBooks] = useState(false);

    /***
     * 
     */
    const handlerOnClickSideMenuButton = () => {
        setStateViewBooks(!stateViewBooks);
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
                        <img src={ryazanRegion} useMap="#map" alt="Рязанская область" />
                        <img src={ryazanRegionMap} alt="Рязанская область" />
                        {/* <map name="map"> <area shape="poly" alt="Закладка 2"
                            coords="210,27, 203,9, 202,6, 197,2, 192,1, 120,1, 115,2, 110,6, 112,9, 119,27, 119,32, 211,32, 210,27"
                            href="2.html">
                            <area shape="poly" alt="Закладка 3"
                                coords="302,27, 295,9, 293,6, 289,2, 283,1, 212,1, 206,2, 202,6, 203,9, 210,27, 211,32, 284,32, 303,32, 302,27" href="3.html">
                                <area shape="poly" alt="Закладка 4"
                                    coords="302,27, 303,32, 394,32, 393,27, 386,9, 382,3, 375,1, 303,1, 298,2, 293,6, 295,9, 302,27"
                                    href="4.html">
                        </map> */}
                        
                            </div>
                        </div>
                            <div className="slide-menu-container">
                                <button onClick={handlerOnClickSideMenuButton}>Книги победы <img src={book} alt="книга" /></button>
                            </div>
                            {stateViewBooks && <div className="slide-menu-container_hrefs">
                                <button>
                                    <img src={book} alt="" />
                                    <span> 75 лет книга победы</span>
                                </button>
                                <button>
                                    <img src={book} alt="" />
                                    <span>70 лет книга победы</span>

                                </button>
                                <button>
                                    <img src={book} alt="" />
                                    <span>Года ВОВ в Рязанской области</span>
                                </button>
                            </div>}
                    </div >
                </>
                )
}