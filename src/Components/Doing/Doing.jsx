import React from 'react';
import CardTitleCompo from '../CardTitleCompo/CardTitleCompo';
import logo from "../../assets/doing.png"
const Doing = () => {
    return (
        <section className='bg-slate-200 rounded-md px-3 h-[800px] w-96 relative'>
        <div className='bg-slate-200 sticky top-0 left-0 right-0 py-2'>
<CardTitleCompo logo={logo} title="Doing"/>
</div>
                </section>
    );
};

export default Doing;