import React, {useEffect, useState} from 'react';
import GetLoginButton from './Login.jsx'; 
import {doLogin, fetchTripList, fetchtrip, doDelete, doLogout, addNewTrip, addImage} from './services.js';
import GetNewTrip from './NewTrip.jsx';
import GetTripPlan from './Trip.jsx';
import GetTripList from './TripList.jsx';
import {AddTrip, Logout} from './AddTrip.jsx';
import './Login.css';
import './travel.css';
import './trip.css';
import './newtrip.css'


function App() {

const [isLoggedin, setIsLoggedin] = useState(false);
const [newtrip, setNewTrip] = useState(false);
const [username, setUsername] = useState('');
const [trips, settrips] = useState([]);
const [errorText, setErrorText] = useState('');
const [tripflag, setTripFlag] = useState(false);
const [plan, setPlan] = useState(null);
const [tripname, setTripname] = useState('');

//login user, sets the IsLogginedin and setusername usestate 
const onLogin = (username) => {
doLogin(username).then(function(response){
 setUsername(username);
 setIsLoggedin(true);
 setErrorText('');
}).catch((error) => {
 setErrorText(error.err);
})
};

//logout user, sets IsLogginedin and setusername usestate 
const onLogout = (username) => {
 doLogout(username).then( function(response){
 setIsLoggedin(false);
 setUsername('');
 setErrorText('');
}).catch((error) => {
 setErrorText(error.err);
})
};

//displays newtrip page by setting setNewTrip to true
const onNewTrip = () => {
 setNewTrip(true);
};


useEffect(() => {
 if (isLoggedin===true){
  if(newtrip === false || setTripFlag ===false){
   fetchTripList().then((response) => {
    settrips(response["trips"]);
    setErrorText('');
     }).catch((error) => {
      setErrorText(error.err);
     });
  }
 }
},[isLoggedin, newtrip, setTripFlag]);


//submit new trip to triplist and set new set of trips
const onAdd = (trip_input, filename) => {
 const imageName = trip_input.location.replace(" ", "") + ".jpg";
   const reader = new FileReader();
      reader.readAsDataURL(filename);
      reader.onload = ((event) => {
         event.preventDefault();
        addImage(event.target.result, imageName).then((res) =>{
           setErrorText('');
           setIsLoggedin(true);
           setNewTrip(false);
           setTripFlag(false);
        }).catch((error) => {
           setErrorText(error.err);
        });
        addNewTrip(trip_input).then((response) => {
           settrips(response["trips"]);
           setErrorText('');
          }).catch((error) => {
         setErrorText(error.err);
         })

     });

};

//displays corresponding trip activity page by setting setTripFlag
const onlocation = (trip) =>{
 fetchtrip(trip).then((response) => {
  setTripname(trip);
  setPlan(response["trip"]);
  setTripFlag(true);
  setErrorText('');
 }).catch((error) => {
 setErrorText(error.err);
 });
};

//deletes the trip from trip list
const onDelete = (trip) => {
 doDelete(trip).then((response) => {
  setTripFlag(false);
  setNewTrip(false);
  setErrorText('');
 }).catch((error) => {
 setErrorText(error.err);
 });
 fetchTripList().then((response) => {
  settrips(response["trips"]);
  setTripFlag(false);
  setNewTrip(false);
  setErrorText('');
   }).catch((error) => {
    setErrorText(error.err);
 });
};

const onReturn = () => {
 fetchTripList().then((response) => {
  settrips(response["trips"]);
  setTripFlag(false);
  setNewTrip(false);
  setErrorText('');
   }).catch((error) => {
    setErrorText(error.err);
 });
};


if(isLoggedin === true){
 if(newtrip === false){
  if(tripflag === true){
  return (
   <div className="trip-page">
   <div className="error-message">{errorText}</div>
   <GetTripPlan tripname={tripname} plan={plan} onReturn={onReturn} onDelete={onDelete}/>
   </div>
  );
 } else {
  return (
   <div className="travel-app">
    <div className="error-message">{errorText}</div>
    <div className="display-panel">
     <GetTripList list={trips} onlocation={onlocation}/>
    </div>
    <div className="outgoing">
     <AddTrip onNewTrip={onNewTrip}/>
     <Logout onLogout={onLogout}/>
    </div>    
   </div>
  );
 }
 }
 else if(newtrip === true){
  return (
   <div className="New-Trip"> 
    <div className="error-message">{errorText}</div>
    <GetNewTrip onAdd={onAdd} onReturn={onReturn}/>
   </div>
  );
 }
}

else{
 return (
  <div className="user-login">
   <div className="error-message">{errorText}</div>
   <GetLoginButton onLogin={onLogin} disabled={false} setIsLoggedin={setIsLoggedin} setUsername={setUsername}/>
  </div>
 );
}

};

export default App;
