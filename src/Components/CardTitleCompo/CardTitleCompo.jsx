import React from 'react';

const CardTitleCompo = ({logo, title}) => {
    return (
        <div className='flex items-center justify-between'>
    <div className='inline-flex items-center gap-2'>
        <img src={logo} alt="Incomplete" className='w-6'/>
        <p className='font-bold text-gray-700'>{title}</p>
    </div>
    <div>
        <p className='bg-slate-300 px-3 py-1 rounded-md font-bold text-gray-700'>0</p>
    </div>
</div>
    );
};

export default CardTitleCompo;