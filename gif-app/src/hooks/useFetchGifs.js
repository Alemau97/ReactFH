import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [Images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const data = async() => {
        const newImages = await getGifs(category);

        setImages(newImages);
        setIsLoading(false);
    };
    
    useEffect(() => {
      
        data();

    }, []) 

    return{
        Images: Images,
        isLoading: isLoading,
    }

}