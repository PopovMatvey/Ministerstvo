import { useEffect, useState } from "react";
import axios from "axios";

// Массив треков (CardTrackProps[])
export function useGetRequest(parUrl:string) {
    const [requestArray, setRequestArray] = useState([]);

    async function featchAudioArray() {
        try {
            const response = await axios.get(parUrl);

            setRequestArray(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        featchAudioArray();
    }, [])

    return { requestArray };
}