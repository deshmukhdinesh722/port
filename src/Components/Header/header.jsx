import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header=()=>
    {
          return (
    <>
    <div className="header">
<div className='name'>

    <h1>DWebs</h1>
</div>

<div className='menu'>
   
        {/* <div >
        <p className='signin'>Sign in</p>
        </div> */}

</div>

    </div>
    </>
  );
};

export default Header;
