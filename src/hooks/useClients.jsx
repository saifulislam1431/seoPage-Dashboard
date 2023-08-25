import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useClients = () => {
    const {data: allClients =[] , refetch} = useQuery({
        queryKey:['allClients'],
        queryFn: async()=>{
            const res = await axios.get("http://localhost:5000/all-clients");
            return res.data;
        }
    })
    return[allClients,refetch]
};

export default useClients;