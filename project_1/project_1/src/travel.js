

const users = {
    "Amit": "Amit",
    "Bao": "Bao",
};

const loginusers=[];

const sessions={};

function addLoginUsers(username){
  loginusers.push(username);
};

console.log(loginusers);

function deleteLoginUsers(username){
  while (loginusers.indexOf(username) !== -1) {
    const userIndex = loginusers.indexOf(username)
    loginusers.splice(userIndex, 1);
  }
};


const trips = [
  {
    image: "./images/Seattle.jpg",
    location: "Seattle",
    places: "Space Needle, Pike Place Market, Rattlesnake Ledge",
    duration: "3 days",
    people: "4"    
  },

  {
    image: "./images/Sanfran.jpg",
    location: "San Francisco",
    places: "Golden Gate Bridge, Alcatraz Island, Fisherman's Wharf, Palace of Fine Arts",
    duration: "2 days",
    people: "3"    
  },

  {
    image: "./images/Texas.jpg",
    location: "Texas",
    places: "San Antonio's River Walk, The Alamo, Space Center Houston, Big Bend National Park",
    duration: "4 days",
    people: "5"    
  },

  {
    image: "./images/Florida.jpg",
    location: "Florida",
    places: "Walt Disney World, Kennedy Space Center, Everglades National Park, Miami Beach",
    duration: "2 days",
    people: "4"
  },

  {
    image: "./images/Idaho.jpg",
    location: "Idaho",
    places: "Craters of the Moon National Monument, Sawtooth National Recreation Area, Lake Coeur d'Alene, Hell's Canyon National Recreation Area",
    duration: "2 days",
    people: "6"    
  }
];

const tripPlan = {

 "Seattle": {
  activity: "Trekking, Kayaking, Skiing",
  places: "Space Needle, Pike Place Market, Rattlesnake Ledge, Snoqualmie pass",
  food: "Chocolates, Protein Bar, fruits",
  lodging: "Hyatt Place",
  transport: "Book a Flight, Book a Train",
  date: new Date("2018-01-05").toLocaleString(),
  duration: "3 days",
  people: "4"
},

"San Francisco": {
  activity: "Trekking, Wildlife Watching",
  places: "Golden Gate Bridge, Alcatraz Island, Fisherman's Wharf, Palace of Fine Arts",
  food: "Cookies, hummus and chips",
  lodging: "Hilton",
  transport: "Book a Car",
  date: new Date("2018-12-01").toLocaleString(),
  duration: "2 days",
  people: "3"
},

"Texas": {
  activity: "Hiking, Wildlife Watching",
  places: "San Antonio's River Walk, The Alamo, Space Center Houston, Big Bend National Park",
  food: "Coffee, Sandwich, Salad",
  lodging: "Warwick",
  transport: "Book a Car",
  date: new Date("2019-04-30").toLocaleString(),
  duration: "4 days",
  people: "5"
},

"Florida": {
  activity: "Swimming, Photography",
  places: "Walt Disney World, Kennedy Space Center, Everglades National Park, Miami Beach",
  food: "Greek Yogurt, Pretzels",
  lodging: "Westin",
  transport: "Book a Flight, Book a Car",
  date: new Date("2019-06-04").toLocaleString(),
  duration: "2 days",
  people: "4"
},

"Idaho": {
  activity: "Zip lining, Camping",
  places: "Craters of the Moon National Monument, Sawtooth National Recreation Area, Lake Coeur d'Alene, Hell's Canyon National Recreation Area",
  food: "Nuts, Trail mix, Granula",
  lodging: "Marriot",
  transport: "Book a Car",
  date: new Date("2019-06-04").toLocaleString(),
  duration: "2 days",
  people: "6"
}

};

function addTrip({location, activity, places, food, lodging, transport, date, duration, people, image}) {
trips.push({location, places, duration, people, image});
tripPlan[location]={activity, places, food, lodging, transport, date, duration, people};
};

function addImage({imagename}){
  trips.push({imagename});
};

function deletetrip(location){
  let locationIndex = null;

  for( let i=0; i< trips.length; i++){
    if(trips[i]["location"] === location){
     locationIndex = i;
     break;
    }
  }
  if (locationIndex!=null){
    trips.splice(locationIndex, 1);
  }
  
}



const travel = {
  users,
  loginusers,
  sessions,
  addLoginUsers,
  deleteLoginUsers,
  trips,
  addTrip,
  addImage,
  tripPlan,
  deletetrip
};

module.exports =  travel;