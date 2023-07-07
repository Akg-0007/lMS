import {useEffect, useState} from "react";
import {fetchService} from '../services/userService'



const useFetch = (obj) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchServiceWrapper = async () => {
            try{
                setIsLoading(true);
                const resData = await fetchService(obj)
                setIsLoading(false)
                setData(resData)
            } catch (error) {
                setIsLoading(false);
                setError(error);
            }
        };

        if(obj) {
            setIsLoading(true);
            fetchServiceWrapper();
        }
    }, [obj])  

    return { data, isLoading, error }
}

export default useFetch

