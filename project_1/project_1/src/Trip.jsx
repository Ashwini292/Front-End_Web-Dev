
import React from 'react';

function GetTripPlan({plan, onReturn, onDelete, tripname}) {

 const trip = (
  <div className="display-panel">
   <div className="trip-detail">
      <p><strong>Activity: </strong>{plan.activity}</p>
      <p><strong>Places: </strong>{plan.places}</p>    
      <p><strong>Food: </strong>{plan.food}</p>
      <p><strong>Lodging: </strong>{plan.lodging}</p>   
      <p><strong>Transport: </strong>{plan.transport}</p>
      <p><strong>Date: </strong>{plan.date}</p>
      <p><strong>Duration: </strong>{plan.duration}</p>
      <p><strong>People: </strong>{plan.people}</p>
    </div>
    <div className="load-detail">
      <button className="return-triplist" onClick = { (e) => {onReturn();}}>HomePage</button>
      <button className="delete-trip" onClick = { (e) => {onDelete(tripname);}}>Delete</button>
    </div>  
  </div>
  );

 return (
  <div className="trip-plan">
  {trip}
  </div>
  );
 
};

export default GetTripPlan;
