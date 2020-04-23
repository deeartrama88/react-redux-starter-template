import React from 'react';
import "./index.scss";

const LoggedInMenu = () => {
    return (
       <div className="login-menu">
          <div className='login-list'>
             <div>Notifications</div>
             <div className='login-list-box'>3</div>
          </div>
          <div className='login-list'>
             <div>Messages</div>
             <div className='login-list-box'>

             </div>
          </div>
          <div className='login-list'>
             <div>Purchase history</div>
             <div className='login-list-box'>5</div>
          </div>
          <div className='login-list'>
             <div>Payment method</div>
             <div className='login-list-box'>6</div>
          </div>
          <div className='login-list'>
             <div>Payment method</div>
             <div className='login-list-box'>7</div>
          </div>
          <hr/>
          <div className='login-list'>Log out</div>
       </div>
    )
};

export default LoggedInMenu;