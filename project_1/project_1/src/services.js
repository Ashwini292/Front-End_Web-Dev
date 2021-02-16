const getLogin = (username) => {

 return fetch('/login?username='+ username).catch( err => {
  return Promise.reject({err: 'network-issue', details: err})
 }).then(function(response){
  if(response.ok){
   return response.json();
  }
  else if(response.status === 401)
  return Promise.reject({ err: 'no username', details: response.statusCode });
 });

};

export const doLogin = (username) => {
 return fetch('/login', {
   method: 'POST',
   headers: new Headers({
    'content-type': 'application/json'
   }),
   body: JSON.stringify({username})
  }).catch( err => {
    return Promise.reject({ err: 'network-issue', details: err });
  }).then(function(response){
   if(response.ok){
    return response.json();
   }
   else if(response.status === 403){
    return Promise.reject({ err: 'invalid username', details: response.statusCode });
   }
  });
};

export const fetchTripList = () => {
 return fetch('/triplist', {
   method: 'GET',
   credentials: 'include',
 }).catch( err => {
    return Promise.reject({ err: 'network-issue', details: err });
  }).then(function(response){
  if(response.ok){
   return response.json();
  }
  else if(response.status === 401){
    return Promise.reject({ err: 'No username', details: response.statusCode });
  }
  else if(response.status === 403){
   return Promise.reject({ err: 'invalid session', details: response.statusCode });
 }
  });
};

export const fetchtrip = (trip) => {
 return fetch('/trip?location=' + trip, {
   method: 'GET',
   credentials: 'include',
 }).catch( err => {
    return Promise.reject({ err: 'network-issue', details: err });
  }).then(function(response){
  if(response.ok){
   return response.json();
  }
 else if(response.status === 401){
    return Promise.reject({ err: 'You must be looged in', details: response.statusCode });
 }
 else if(response.status === 403){
   return Promise.reject({ err: 'invalid session', details: response.statusCode });
 }
  });
};

export const addNewTrip = (trip_input) => {
 return fetch('/newtrip', {
  method: 'POST',
  headers: new Headers({
  'content-type': 'application/json'
  }),
  credentials : 'include',
  body: JSON.stringify(trip_input),
 }).catch( err => {
    return Promise.reject({ err: 'network-issue', details: err });
  }).then(function(response){
    if(response.ok){
    return response.json();
    }
    else if(response.status === 401){
    return Promise.reject({ err: 'You must be loggedin', details: response.statusCode });
    }
    else if(response.status === 400){
    return Promise.reject({ err: 'Fill the required fields', details: response.statusCode });
    }
    else if(response.status === 403){
    return Promise.reject({ err: 'invalid session', details: response.statusCode });
    }
  })
};

export const addImage = (image, imageName) => {
 return fetch('/addimage', {
  method: 'POST',
  headers: new Headers({
  'content-type': 'application/json'
  }),
  credentials : 'include',
  body:JSON.stringify({file: image, filename: imageName}),
 }).catch( err => {
    return Promise.reject({ err: 'network-issue', details: err });
  }).then(function(response){
    if(response.ok){
    return response.json();
    }
    else if(response.status === 401){
    return Promise.reject({ err: 'You must be loggedin', details: response.statusCode });
    }
    else if(response.status === 400){
    return Promise.reject({ err: 'Fill the required fields', details: response.statusCode });
    }
    else if(response.status === 403){
    return Promise.reject({ err: 'invalid session', details: response.statusCode });
    }
  })
};

export const doDelete = (trip) => {
  return fetch('/deletetrip?location='+ trip, {
  method: 'DELETE',
  headers: new Headers({
  'content-type': 'application/json'
  }),
  credentials : 'include',
  }).catch( err => {
    return Promise.reject({ err: 'network-issue', details: err });
  }).then(function(response){
    if(response.ok){
    return response.json();
    }
    else if(response.status === 401){
    return Promise.reject({ err: 'You must be loggedin', details: response.statusCode });
    }
    else if(response.status === 403){
    return Promise.reject({ err: 'invalid session', details: response.statusCode });
    }
  })
};

export const doLogout = (username) => {
 return fetch('/logout', {
  method: 'POST',
  headers: new Headers({
   'content-type': 'application/json'
  }),
  credentials : 'include',
  body: JSON.stringify({username})
 }).catch(err => {
  return Promise.reject({ err: 'network-issue', details: err});
 }).then(function(response){
  if(response.ok){
   return response.json();
  }
  else if(response.status === 401){
  return Promise.reject({ err: 'You must be loggedin', details: response.statusCode });
  }
  else if(response.status === 403){
  return Promise.reject({ err: 'invalid session', details: response.statusCode });
  }
 })
};



