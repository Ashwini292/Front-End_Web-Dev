import React, {useState} from 'react';

function GetTripList({ list, onlocation}) {
 const triplist = list.map( trip => 
 <li>    
  <div className="trip">
   <div className="trip-logo">
    <img className="avatar" alt="trip-avatar" src={require(`${trip.image}`)}/>
   </div>
   <div className="trip-details">
     <p className="trip-location" onClick={
      (e) => {onlocation(trip.location);}}>
      <strong>Location:</strong> {trip.location}</p>
     <p><strong>Places:</strong> {trip.places}</p>
     <p><strong>Duration:</strong> {trip.duration}</p>
     <p><strong>People:</strong> {trip.people}</p>
   </div>
  </div>    
 </li>);
 return (
  <ul className="trips">
   {triplist}
  </ul>
);
};

export default GetTripList;
