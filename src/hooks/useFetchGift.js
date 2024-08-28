import { useEffect, useState } from 'react';
import {getGifs} from '../helpers/getGifs';
export const useFetchGift = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getGifs(category).then((newImg) => {
            setImages(newImg)
            console.log(isLoading);
        }).finally(
        setIsLoading(false)
        );
    }, [])
    return {
    images
  }
}
