import React from 'react';
import CardTitleCompo from '../CardTitleCompo/CardTitleCompo';
import logo from "../../assets/complete.png"
import ClientCards from '../ClientCards/ClientCards';
const Completed = () => {
    return (
        <section className='bg-slate-200 rounded-md px-3 h-[800px] w-96 relative verticalScroll style-8 '>
        <div className='bg-slate-200 sticky top-0 left-0 right-0 py-2'>
<CardTitleCompo logo={logo} title="Completed"/>
</div>

<div>
    <ClientCards />
</div>
                </section>
    );
};

export default Completed;