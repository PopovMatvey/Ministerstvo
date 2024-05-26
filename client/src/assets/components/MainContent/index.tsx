import React, { useState } from "react";
import "./css/style.css";
import logoUser from "../../images/user.jpg"
import lupa from "../../images/lupa.png"
import book from "../../images/book.png"
import { ryazanAllRegionSVG } from "./data/ryazanRegionSVG";
import { arrayRegions } from "./data/arrayRegions";

export function MainContent() {
    const [stateViewBooks, setStateViewBooks] = useState(false);
    const [stateViewCities, setStateViewCities] = useState(false);
    const [currentCity, setCurrentCity] = useState("");

    /***
     * 
     */
    const getCurrentIndexRegion = (currentClassValue: string) => {
        return arrayRegions.findIndex((element) => (element.class === currentClassValue));
    }

    /***
     * 
     */
    const handlerOnClickSideMenuButton = () => {
        setStateViewBooks(!stateViewBooks);
    }

    /***
     * 
     */
    const handlerColomnCities = () => {
        setStateViewCities(!stateViewCities);
    }

    /***
     * 
     */
    const handlerMapOnClick = (event: any) => {
        let currentIndex = getCurrentIndexRegion(event.target.className.baseVal);

        if (currentIndex != -1) {
            setCurrentCity(arrayRegions[currentIndex].name);
        } else {
            setCurrentCity("");
        }
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
                            <div className="main-content_container_slide-menu__cities_row">
                                <button onClick={handlerColomnCities}>Развернуть v</button>
                            </div>
                            {stateViewCities && <div className="main-content_container_slide-menu__cities_container">
                                {arrayRegions.map((element: any, index: number) => (
                                    <span>{element.name}</span>
                                ))}
                            </div>}
                        </div>
                    </div>
                    <div className="main-content_map_title">
                        <h3>{currentCity}</h3>
                    </div>
                    <div className="main-content_map" dangerouslySetInnerHTML={{ __html: ryazanAllRegionSVG }} onClick={handlerMapOnClick}></div>
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