import React, { useState } from "react";
import "./css/style.css";
import logoUser from "../../images/user.jpg"
import lupa from "../../images/lupa.png"
import book from "../../images/book.png"
import { ryazanAllRegionSVG } from "./data/ryazanRegionSVG";
// import { arrayRegions } from "./data/arrayRegions";
// import { arrayPeople } from "./data/arrayPeople";
import { Region } from "../../types/Region";
import { useGetRequest } from "../../hook/useAudioArray";
import { People } from "../../types/People";
// import { arrayPeople } from "./data/arrayPeople";

export function MainContent() {
    const [stateViewBooks, setStateViewBooks] = useState(false);
    const [stateViewCities, setStateViewCities] = useState(false);
    const [currentCity, setCurrentCity] = useState("");
    const arrayRegions: Region[] = useGetRequest("http://localhost:2000/api/regions").requestArray;
    const arrayPeople: People[] = useGetRequest("http://localhost:2000/api/people").requestArray;
    const [currentArrayPeople, setCurrentPeople] = useState(arrayPeople);
    const [checkCurrentPeople, setCheckCurrentPeople] = useState(true);

    const findPeopleArray = (parArray: any, targetArray: any, parKeyField: string) => {
        let returnedArray: any[] = [];

        for (let i = 0; i < parArray.length; i++) {
            if (parArray[i][parKeyField] === targetArray[i]) {
                returnedArray.push(parArray[i]);
            }
        }

        return returnedArray;
    }

    /**
     * 
     * @param event 
     */
    const onKeyDownInputSearchPeople = (event: any) => {
        let keyField = "surname";

        // currentArrayPeople = 
        setCurrentPeople(
            findPeopleArray(
                arrayPeople,
                findDetermPeople(event.target.value, getObjectFieldToArray(arrayPeople, keyField)),
                keyField
            ));
    }

    const getObjectFieldToArray = (parArray: any, parNameField: any) => {
        let returnedArray: any = [];

        for (let i = 0; i < parArray.length; i++) {
            returnedArray.push(parArray[i][parNameField]);
        }

        return returnedArray;
    }

    /**
     * 
     * @param parInputText 
     * @param parArray 
     * @returns 
     */
    function findDetermPeople(parInputText: string, parArray: any) {
        const regString = `^${parInputText}`;
        const regex = new RegExp(regString, 'i');

        return searchPeople(parArray, regex);
    }

    /**
     * 
     * @param parArray 
     * @param parRegex 
     * @returns 
     */
    function searchPeople(parArray: any, parRegex: any,) {
        const returnedArray = [];

        for (let i = 0; i < parArray.length; i++) {
            if (parRegex.exec(parArray[i]) !== null) {
                returnedArray.push(
                    parArray[i]
                )
            }
        }


        if (returnedArray.length === 0) {
            setCheckCurrentPeople(false);

            return [{}];
        }

        setCheckCurrentPeople(true);

        return returnedArray;
    }

    /**
     * 
     * @param currentClassValue 
     * @returns 
     */
    const getCurrentIndexRegion = (currentClassValue: string) => {
        return arrayRegions.findIndex((element: any) => (element.class_region === currentClassValue));
    }

    /**
     * 
     */
    const handlerOnClickSideMenuButton = () => {
        setStateViewBooks(!stateViewBooks);
    }

    /**
     * 
     */
    const handlerColomnCities = () => {
        setStateViewCities(!stateViewCities);
    }

    /**
     * 
     * @param event 
     */
    const handlerMapOnClick = (event: any) => {
        let currentIndex: number = getCurrentIndexRegion(event.target.className.baseVal);

        if (currentIndex !== -1) {
            setCurrentCity(arrayRegions[currentIndex].name_region);
        } else {
            setCurrentCity("");
        }
    }

    /**
     * 
     * @param parString 
     * @returns 
     */
    const getShortString = (parString: string) => {
        if (parString.length >= 60) {
            return parString.slice(0, 60) + "...";
        }

        return parString;
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
                                    <input type="text" onKeyUp={onKeyDownInputSearchPeople} />
                                </div>
                                {
                                    checkCurrentPeople ? (currentArrayPeople.map((element: People, index: number) => (
                                        <div className="main-content_container_slide-menu__humans_container_user" key={index} >
                                            {element.photo ? (
                                                <img src={element.photo} alt="user" />
                                            ) : (
                                                <img src={logoUser} alt="user" />
                                            )}
                                            <div className="main-content_container_slide-menu__humans_container_user__text">
                                                <h4>{element.surname} {element.patronymic[0]}.</h4>
                                                <span>
                                                    {getShortString(element.war_description)}
                                                </span>
                                            </div>
                                        </div>)
                                    )) : (
                                        <div className="main-content_container_slide-menu__humans_container_user">
                                            <h4>Таких людей нет</h4>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="main-content_container_slide-menu__cities">
                            <h3>Города</h3>
                            <div className="main-content_container_slide-menu__cities_row">
                                <button onClick={handlerColomnCities}>Развернуть v</button>
                            </div>
                            {stateViewCities && <div className="main-content_container_slide-menu__cities_container">
                                {arrayRegions.map((element: Region, index: number) => (
                                    <span key={index} id={element.class_region}>{element.name_region}</span>
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
                        <img src={book} alt="Иконка книги" />
                        <span> 75 лет книга победы</span>
                    </button>
                    <button>
                        <img src={book} alt="Иконка книги" />
                        <span>70 лет книга победы</span>
                    </button>
                    <button>
                        <img src={book} alt="Иконка книги" />
                        <span>Года ВОВ в Рязанской области</span>
                    </button>
                </div>}
            </div >
        </>
    )
}