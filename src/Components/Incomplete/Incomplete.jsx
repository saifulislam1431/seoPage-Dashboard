import React from 'react';
import useClients from '../../hooks/useClients';
import logo from "../../assets/puzzle.png";
import CardTitleCompo from '../CardTitleCompo/CardTitleCompo';

const Incomplete = () => {
    const [allClients,refetch] = useClients();
    return (
        <section className='bg-slate-200 rounded-md p-3 h-[800px] w-80'>
<CardTitleCompo logo={logo} title="Incomplete"/>
        </section>
    );
};

export default Incomplete;