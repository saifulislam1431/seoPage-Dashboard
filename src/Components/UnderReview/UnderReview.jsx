import React from 'react';
import CardTitleCompo from '../CardTitleCompo/CardTitleCompo';
import logo from "../../assets/under review.png"
const UnderReview = () => {
    return (
        <section className='bg-slate-200 rounded-md p-3 h-[800px] w-80'>
        <CardTitleCompo logo={logo} title="Under Review"/>
                </section>
    );
};

export default UnderReview;