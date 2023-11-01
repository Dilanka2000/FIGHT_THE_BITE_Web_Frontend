import axios from "axios";
import { useEffect, useState } from "react";
import { getUsername } from "../helper/helper";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

export default function useFetch(query) {
    const [getData, setData] = useState({ isLoading: true, apiData: undefined, status: null, serverError: null });

    useEffect(() => {

        const fetchData = async () => {
            try {
                setData(prev => ({ ...prev, isLoading: true }));

                const { username } = !query ? await getUsername() : "";
                const { data, status } = !query ? await axios.get(`/api/user/${username}`) :  await axios.get(`/api/${query}`);

                if (status === 201) {
                    setData((prev) => ({ ...prev, isLoading: false }));
                    setData((prev) => ({ ...prev, apiData: data, status: status }));
                }

                setData((prev) => ({ ...prev, isLoading: false }));

            } catch (error) {
                setData(prev => ({ ...prev, isLoading: false, serverError: error }));
            }
        };

        fetchData();
        
    }, [query])

    return [getData, setData];
}

export function useFetch2(query) {
    const [getData, setData] = useState({ isLoading2: true, apiData2: undefined, status2: null, serverError2: null });

    useEffect(() => {

        const fetchData = async () => {
            try {
                setData(prev => ({ ...prev, isLoading2: true }));

                const { username } = !query ? await getUsername() : "";
                const { data, status } = !query ? await axios.get(`/api/user/${username}`) :  await axios.get(`/api/${query}`);

                if (status === 201) {
                    setData((prev) => ({ ...prev, isLoading2: false }));
                    setData((prev) => ({ ...prev, apiData2: data, status2: status }));
                }

                setData((prev) => ({ ...prev, isLoading2: false }));

            } catch (error) {
                setData(prev => ({ ...prev, isLoading2: false, serverError2: error }));
            }
        };

        fetchData();
        
    }, [query])

    return [getData, setData];
}