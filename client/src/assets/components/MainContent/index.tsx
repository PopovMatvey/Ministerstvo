import React, { useEffect, useState } from "react";
import "./css/style.css";
import logoUser from "../../images/user.jpg"
import lupa from "../../images/lupa.png"
import book from "../../images/book.png"
import { ryazanAllRegionSVG } from "./data/ryazanRegionSVG";
import { Region } from "../../types/Region";
import { useGetRequest } from "../../hook/useAudioArray";
import { People } from "../../types/People";
import { Footer } from "../Footer";

export function MainContent() {
    const apiPeople = "http://5.35.94.98:2000/api/people";
    // const apiPeople = "http://localhost:2000/api/people";
    const [stateViewBooks, setStateViewBooks] = useState(false);
    const [stateViewCities, setStateViewCities] = useState(false);
    const [currentCity, setCurrentCity] = useState("");
    const arrayRegions: Region[] = useGetRequest("http://5.35.94.98:2000/api/regions").requestArray;
    const arrayPeople: People[] = useGetRequest(apiPeople).requestArray;
    const [currentArrayPeople, setCurrentPeople] = useState(arrayPeople);
    const [checkCurrentPeople, setCheckCurrentPeople] = useState(true);
    const [firstRun, setFirstRun] = useState(true);
    // setCurrentPeople(arrayPeople);
    // console.log(arrayPeople)
    // console.log(window.innerWidth)

    /**
     * 
     * @param parArray 
     * @param targetArray 
     * @param parKeyField 
     * @returns 
     */
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

        setFirstRun(false);
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
        let indexSpan = 0;
        let indexPath = 0;
        let currentTarget = event.target.className.baseVal;
        let currentIndex: number = getCurrentIndexRegion(currentTarget);
        let spanCity = document.querySelector(".main-content_container_slide-menu__cities_container")?.children;
        let pathArray = document.querySelector(".main-content_map svg g")?.children;

        if (currentIndex !== -1) {
            setCurrentCity(arrayRegions[currentIndex].name_region);
        } else {
            setCurrentCity("");
        }

        for (let key in spanCity) {
            if (spanCity[indexSpan] !== undefined) {
                if (spanCity[indexSpan].classList.contains("active-city")) {
                    spanCity[indexSpan].classList.remove("active-city");
                }
            }

            indexSpan++;
        }


        for (let key in pathArray) {
            if (pathArray[indexPath]?.classList.length !== undefined) {
                if (pathArray[indexPath].classList.contains("active-region")) {
                    pathArray[indexPath].classList.remove("active-region");
                }
            }

            indexPath++;
        }

        // if ((document.querySelector(`#${currentTarget}`) !== null) ||
        //     ((document.querySelector(`.${currentTarget}`) !== null))) {
        //     // document.querySelector(`#${currentTarget}`)?.classList.add("active-city");
        //     // document.querySelector(`.${currentTarget}`)?.classList.add("active-region");
        // }
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

    useEffect(() => {
        setCurrentPeople(arrayPeople);
    }, [checkCurrentPeople, arrayPeople])

    return (
        <>
            <div className="wrapper">
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
                                        firstRun ? (
                                            arrayPeople.map((element: People, index: number) => (
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
                                            )
                                        ) :
                                            (
                                                checkCurrentPeople ? (
                                                    currentArrayPeople.map((element: People, index: number) => (
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
                                                    )
                                                ) : (
                                                    <div className="main-content_container_slide-menu__humans_container_user">
                                                        <h4>Таких людей нет</h4>
                                                    </div>
                                                ))
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
                        {
                            currentCity ? (
                                <div className="main-content_map_title">
                                    <h3>{currentCity}</h3>
                                </div>)
                                : (
                                    <></>
                                )}
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
                <Footer />
            </div>
        </>
    )
}