import React, {useState, useEffect} from 'react';
import { serverCalls } from '../api'

export const useGetData = () => {
    const [heroData, setData] = useState<[]>([])
    async function handleDataFetch(){
        const result = await serverCalls.get();
        setData(result)
    }

    //useEffect hook to add our data to our react state
    useEffect( () => {
        handleDataFetch();
    }, [])
    console.log(`heroData:`, heroData)
    // let temp = heroData

    return {heroData, getData:handleDataFetch}
}