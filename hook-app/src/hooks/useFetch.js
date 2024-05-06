import { useEffect, useState } from "react";
import axios from 'axios';

const localCache = {};

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })

    const {data, isLoading, hasError} = state;

    const setLoading = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }


    useEffect(() => {
        getFetch();
    }, [url])

    const getFetch = async() => {

        if(localCache[url]) {
            console.log('Using cache');
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            })

            return;
        }

        setLoading();

        const response = await axios.get(url);

        const data = await response.data;

        await new Promise(resolve => setTimeout(resolve, 1500));

        if(!response.status === 200 ){
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText 
                }
            });
            return;
        }

        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })

        localCache[url] = data;

    }

    return {
        data: data,
        isLoading: isLoading,
        hasError: hasError,
    }

}