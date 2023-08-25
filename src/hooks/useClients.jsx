import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useClients = () => {
    const {data: allClients =[] , refetch} = useQuery({
        queryKey:['allClients'],
        queryFn: async()=>{
            const res = await axios.get("https://seo-page-dashboard-server.vercel.app/all-clients");
            return res.data;
        }
    })
    return[allClients,refetch]
};

export default useClients;