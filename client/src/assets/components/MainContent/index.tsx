import React, { useState } from "react";
import "./css/style.css";
import logoUser from "../../images/user.jpg"
import lupa from "../../images/lupa.png"
import book from "../../images/book.png"
import ribnoe from "./images/ribnoe-region.svg"
import klepikovskiy from "./images/klepilovskiy-region.svg"
import ryazanRegion from "./images/ryazan-region.svg"
import ryazanRegionMap from "./images/ryazan-region-map.svg"
import ryazanRegionSVG from "../../images/ryazan-region-mk6.svg"
import { ryazanAllRegionSVG } from "./data/ryazanRegionSVG";
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
        console.log(ryazanRegion)
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
                    <div className="main-content_map" dangerouslySetInnerHTML={{ __html: ryazanAllRegionSVG }}></div> 

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