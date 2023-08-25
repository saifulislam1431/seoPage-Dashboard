import React from 'react';
import { FaClipboardList, FaLayerGroup, FaRegComments } from "react-icons/fa";
import { HiOutlineCalendarDays, HiPaperClip } from "react-icons/hi2";
import men from "../../assets/man.png";
import women from "../../assets/woman.png";

const SingleClient = ({singleClient}) => {
    const {author_img,author_name,client_img,client_name,comments,date,_id,attachments} = singleClient
    return (
        <section className='bg-white rounded-md h-[180px] p-2'>
<div className='flex items-center justify-between'>
<div className='inline-flex gap-1 items-center'>
<img src={client_img} alt="Client Image" className='w-7 h-8 rounded-full'/>
<p className='font-semibold text-slate-700'>{client_name}</p>
</div>
<div className='inline-flex gap-1 items-center'>
<img src={author_img} alt="Client Image" className='w-7 h-7 rounded-full'/>
<p className='font-semibold text-slate-700'>{author_name}</p>
</div>
</div>

<div className='my-7 flex items-center justify-between'>
<div className='inline-flex items-center gap-1'>
   <FaLayerGroup />
   <p>Lorem ipsum dolor sit amet.</p>
</div>
<div>
<p className='inline-flex items-center bg-slate-200 px-2 py-1 gap-1 rounded-md text-gray-600 font-semibold'><FaClipboardList /> 1/2</p>
</div>
</div>

<div className='mb-5 flex items-center gap-3'>
<img src={women} alt="Women" className='w-6'/>
<img src={men} alt="Men" className='w-6'/>
<p className='bg-slate-200 rounded-full p-1 font-semibold'>12+</p>
<div className='inline-flex items-center gap-1'>
  <FaRegComments className='w-5 h-5'/> <p className='font-semibold'>{comments}</p> 
</div>
<div className='inline-flex items-center gap-1'>
    <HiPaperClip className='w-5 h-5'/>
    <p className='font-semibold'>{attachments ? attachments.length : 0}</p>
</div>
<div className='inline-flex items-center gap-1'>
    <HiOutlineCalendarDays className='w-5 h-5'/>
    <p className='font-semibold'>{date}</p>
</div>
</div>
        </section>
    );
};

export default SingleClient;