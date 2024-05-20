import React from "react";
import "./css/style.css";
import { Route, Routes } from 'react-router-dom';
import { Slider } from '../Slider';
import Player from '../AudioPlayer';
import { ScannerQR } from '../QRCodeScaner';
import russia from "./images/russia.svg";

export function MainContent() {
    return (
        <>
            <Routes>
                {/* <Route path={"/"} element={<Slider />}></Route> */}
                {/* <Route path={"/player"} element={<Player />}></Route>
                <Route path={"/scanner"} element={<ScannerQR />}></Route> */}
                {/* <img src={russia} alt="Россия" /> */}
            
            </Routes>
        </>
    )
}