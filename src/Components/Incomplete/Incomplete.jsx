import React from 'react';
import logo from "../../assets/puzzle.png";
import CardTitleCompo from '../CardTitleCompo/CardTitleCompo';
import ClientCards from '../ClientCards/ClientCards';
import "./Incomplete.css"

const Incomplete = () => {
    return (
        <section className='bg-slate-200 rounded-md px-3 h-[800px] w-96 verticalScroll style-8 relative'>
<div className='bg-slate-200 sticky top-0 left-0 right-0 py-2'>
<CardTitleCompo logo={logo} title="Incomplete"/>
</div>

<div>
<ClientCards />
</div>
        </section>
    );
};

export default Incomplete;