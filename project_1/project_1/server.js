const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 5000;

const travel = require('./src/travel');

app.use(cookieParser());
app.use('./images', express.static(__dirname + './images'));

app.get('/login', (req,res) => {
 const username = req.query.username;
 if(travel.loginusers.includes(username) === true){
 		res.json({username: username});
 }
 else{
 		res.status(401).json({error : `no username`});
 }

});

app.post('/login', express.json(), (req, res) => {
	const username = req.body.username;
	const sessionId = Math.floor( Date.now() + (Math.random() * 10000));

	if(Object.values(travel.users).indexOf(username)>-1){
		travel.addLoginUsers(username);
		travel.sessions[sessionId] = {username};
	 res.cookie('session', sessionId, {
      sameSite: 'Strict',
   });
		res.json({sessionId});
		
	}
	else{
	travel.deleteLoginUsers(username);
	res.status(403).json({error : `invalid username`});
	}
}); 

app.get('/triplist', (req, res) => {
	const sessionId = req.cookies && req.cookies.session;
		if (!sessionId){
				res.status(401).json({error : `No username`});      
		}
		else if(travel.sessions[sessionId]!=null){
		res.json({trips: travel.trips});
		}
		else {
				res.status(403).json({error : `session: ${sessionId} is not valid session`});
		}
});

app.get('/trip', (req, res) => {
	const sessionId = req.cookies && req.cookies.session;
	const location = req.query.location;
		if (!sessionId){
				res.status(401).json({error : `No username`});      
		}
		else if(travel.sessions[sessionId]!=null){
			if(location !=null && travel.tripPlan[location]!=null){
				res.json({trip: travel.tripPlan[location]});
			}
		}
		else {
				res.status(403).json({error : `session: ${sessionId} is not valid session`});
		}
});

app.post('/newtrip', express.json(), (req,res) => {
	const sessionId = req.cookies && req.cookies.session;
	const location = req.body.location;
	const places = req.body.places;
	const duration = req.body.duration;
	const people = req.body.people;
	if (!sessionId){
    res.status(401).json({error : `No username`});
  }
 else if(travel.sessions[sessionId]!=null){
  travel.addTrip(req.body);
  res.json({trips: travel.trips});
 } 
 else if(location.length==0 || places.length==0 || duration.length==0 || people.length==0){
  res.status(400).json({error : `Fill the required fields`});
 }
 else {
  res.status(403).json({error : `Unknown user: ${username}`});
 }
});

app.post('/logout', express.json(), (req,res) => {
	const username = req.body.username;
	const sessionId = req.cookies && req.cookies.session;
 if (!sessionId){
   res.status(401).json({error : `You must be loggedin`});
 }
	else if(travel.sessions[sessionId]!=null){
		res.cookie('session', "", {
    sameSite: "",
    expires : 0,
  });
		res.json({sessionId});
		travel.deleteLoginUsers(username, sessionId);
	}
	else{
	res.status(403).json({error : `invalid username`});
	}

});

app.post('/addimage', express.json(), (req,res) => {
	const sessionId = req.cookies && req.cookies.session;

 if (!sessionId){
   res.status(401).json({error : `You must be loggedin`});
 }
	else if(travel.sessions[sessionId]!=null){
  let fs = require('fs');
  let image = req.body.file;
  let imagename = req.body.filename;
  let imagedata = image.replace(/^data:image\/\w+;base64,/, "");
  let buf = new Buffer.alloc(imagedata.length, imagedata, 'base64');
  fs.writeFileSync('./src/images/' + imagename, buf);
  res.json({"statue": "success"});
	}
	else{
	res.status(403).json({error : `invalid username`});
	}
});

app.delete('/deletetrip', express.json(), (req,res) => {
	const sessionId = req.cookies && req.cookies.session;
	const location = req.query.location;
	if (!sessionId){
    res.status(401).json({error : `No username`});
  }

 else if(travel.sessions[sessionId]!=null){
  travel.deletetrip(location);
  res.json({trips: travel.trips});
 } 

 else {
  res.status(403).json({error : `Invalid session`});
 }
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
