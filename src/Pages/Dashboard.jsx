import React from 'react';
import Incomplete from '../Components/Incomplete/Incomplete';
import ToDo from '../Components/ToDo/ToDo';
import Doing from '../Components/Doing/Doing';
import UnderReview from '../Components/UnderReview/UnderReview';
import Completed from '../Components/Completed/Completed';
import OverDated from '../Components/OverDated/OverDated';
import "./Dash.css";

const Dashboard = () => {
    return (
<section className='py-10 px-3 customScroll style-7'>
  <div className='w-screen min-w-[1800px] 2xl:min-w-[2200px]'>
    <div className='flex gap-8'>
      <div><Incomplete /></div>
      <div><ToDo /></div>
      <div><Doing /></div>
      <div><UnderReview /></div>
      <div><Completed /></div>
      <div><OverDated /></div>
    </div>
  </div>
</section>


    );
};

export default Dashboard;