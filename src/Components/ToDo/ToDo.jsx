import React from 'react';
import logo from "../../assets/todo.png"
import CardTitleCompo from '../CardTitleCompo/CardTitleCompo';
const ToDo = () => {
    return (
        <section className='bg-slate-200 rounded-md p-3 h-[800px] w-80'>
        <CardTitleCompo logo={logo} title="TODO"/>
                </section>
    );
};

export default ToDo;