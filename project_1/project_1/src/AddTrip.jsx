import React from 'react';

export const AddTrip = ({onNewTrip}) => {
  return(
   <div className="new-trip">
   <button className="add-trip" onClick ={ (e) => {onNewTrip()}}>New Trip</button>
   </div>
  );
};

export const Logout = ({onLogout, username}) => {
  return (<div>
   <button className="user-logout" onClick ={ (e) => {onLogout(username)}}>Logout</button>
 </div>);
};
