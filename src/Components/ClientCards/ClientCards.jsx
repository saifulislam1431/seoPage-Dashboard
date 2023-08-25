import React from 'react';
import useClients from '../../hooks/useClients';
import SingleClient from './SingleClient';

const ClientCards = () => {
    const [allClients,refetch] = useClients();
    return (
        <section className='my-7'>
<div className='grid grid-cols-1 gap-5 '>
{
    allClients.map(singleClient=><SingleClient
    key={singleClient._id}
    singleClient={singleClient}
    ></SingleClient>)
}
</div>
        </section>
    );
};

export default ClientCards;