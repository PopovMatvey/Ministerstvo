import React from "react";
import "./css/style.css";
import logoUser from "../../images/user.jpg"
import lupa from "../../images/lupa.svg"
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

    return (
        <>
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

                </div>
            </div>
        </>
    )
}