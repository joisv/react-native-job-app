import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (enpoint, query) => {
    const [ data, setData ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${enpoint}`,
        params: {...query},
        headers: {
            'X-RapidAPI-Key': 'aea5e6f851msh0d3019689849da1p138e04jsn8b38e8f2988a',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true)

        try{
            const response = await axios.request(options)

            setData(response.data.data)
            setIsLoading(false)
        } catch ( error ) {
            setError(error)
            alert('there is an error')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error , refetch}
}

export default useFetch;