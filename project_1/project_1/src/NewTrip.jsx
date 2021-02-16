
import React, {useState} from 'react';
import {addImage} from './services.js';

function handleImage (image) {
  
  const data = new FormData();
  data.append('file', image);
}

function GetNewTrip({onAdd, onReturn}) {

const [location, setLocation] = useState('');
const [activity, setActivity] = useState('');
const [food, setFood] = useState('');
const [lodging, setLodging] = useState('');
const [transport, setTransport] = useState('');
const [date, setDate] = useState('');
const [places, setPlaces] = useState('');
const [duration, setDuration] = useState('');
const [people, setPeople] = useState('');
const [file, setFile] = useState('');
const [errorText, setErrorText] = useState('');

 return (
  <div className="newtrip-panel">
  <div className="error-message">{errorText}</div>
   <div className="newtrip-label">
    <p><strong><label>Location: </label></strong></p>
    <p><strong><label>Activity: </label></strong></p>
    <p><strong><label>Food: </label></strong></p>
    <p><strong><label>Lodging: </label></strong></p>
    <p><strong><label>Transport: </label></strong></p>
    <p><strong><label>Date: </label></strong></p>
    <p><strong><label>Places: </label></strong></p>
    <p><strong><label>Duration: </label></strong></p>
    <p><strong><label>People: </label></strong></p>
    <p><strong><label>Upload Image: </label></strong></p>
   </div>
   <div className="newtrip-input">
    <p><input className="newtrip-location" type="text" name="location" required title="Please enter location" onChange={ (e) => {
    setLocation(e.target.value);}}
    value={location}/></p>
    <p><input className="newtrip-activity" type="text" name="places" required title="Please enter Places" onChange={ (e) => {
    setActivity(e.target.value);}}
    value={activity}/></p>
    <p><input className="newtrip-food" type="text" name="places" required title="Please enter Places" onChange={ (e) => {
    setFood(e.target.value);}}
    value={food}/></p>
    <p><input className="newtrip-lodging" type="text" name="places" required title="Please enter Places" onChange={ (e) => {
    setLodging(e.target.value);}}
    value={lodging}/></p>
    <p><input className="newtrip-transport" type="text" name="places" required title="Please enter Places" onChange={ (e) => {
    setTransport(e.target.value);}}
    value={transport}/></p>
    <p><input className="newtrip-activity" type="text" name="places" required title="Please enter Places" onChange={ (e) => {
    setDate(e.target.value);}}
    value={date}/></p>
    <p><input className="newtrip-places" type="text" name="places" required title="Please enter Places" onChange={ (e) => {
    setPlaces(e.target.value);}}
    value={places}/></p>
    <p><input className="newtrip-duration" type="text" name="duration" required title="Please enter Duration" onChange={ (e) => {
    setDuration(e.target.value);}}
    value={duration}/></p>
    <p><input className="newtrip-persons" type="text" name="people" required title="Please enter People" onChange={ (e) => {
    setPeople(e.target.value);}}
    value={people}/></p>    
    <p><input className="newtrip-image" type="file" name="file" onChange={ (e) => {
     setFile(e.target.files[0]);
    }}/></p>
    </div>
   <div className="addto-trips">
   <button className="submit-trip" onClick = { (e) => {
      if (file === ''){
        setErrorText("Please specify an image for upload");
        return;
      } else if (location === '' || places === '' || duration === '' || people === ''){
        setErrorText("Fill the required fields");
        return;
      }
      const imageName = location.replace(" ", "") + ".jpg";
      const image = "./images/" + imageName;
      onAdd({location, activity, food, lodging, transport, date, places, duration, people, image}, file);
     }}> Submit</button>
   <button className="display-triplist" onClick = { (e) => {onReturn();}}>HomePage</button>
   </div>
  </div>
 );
};

export default GetNewTrip;


