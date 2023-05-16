import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";

const rapidApiKey = RAPID_API_KEY

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };
    const fetchData = async () => {
        setisLoading(true);

        try {
            const response = await axios.request(options);
            await new Promise(resolve => setTimeout(resolve, 600));

            setData(response.data.data);
            setisLoading(false);
        } catch (error) {
            setError(error);
            alert("There is an error");
        } finally {
            setisLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setisLoading(true);
        fetchData();
    }

    return { data, isLoading, error };
}

export default useFetch;