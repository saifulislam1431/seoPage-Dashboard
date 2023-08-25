import React from 'react';
import CardTitleCompo from '../CardTitleCompo/CardTitleCompo';
import logo from "../../assets/doing.png"
const Doing = () => {
    return (
        <section className='bg-slate-200 rounded-md p-3 h-[800px] w-80'>
        <CardTitleCompo logo={logo} title="Doing"/>
                </section>
    );
};

export default Doing;