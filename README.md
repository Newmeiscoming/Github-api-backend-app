# Github-api-backend-app

This is a full fledge backend app where we are playing around data of Github api. One can search the user and the data will be automatically saved in database.

------------------------------------here are important routes---------------------------------------

POST API:{
  http://localhost/add/:username  (username will be provided by the user as param)
  This API will allow you to search github user and its data will be automatically saved into the database
}


GET API:{
  http://localhost/friend/:username  (username will be provided by the user as param)
  This API will allow you to get all the mutual followers of an user.
  
  http://localhost/search?location=''&username=''&id='' (User will have to provide with query parrams)
  This API will let you search any user from database provided that quary params are there
  
  http://localhost/ 
  Thids API will get you all the users present in database in sorted manner
}

DELETE API:{
  http://localhost/delete/:username  (username will be provided by the user as param)
  This API will allow you to delete an user from database based on username provided
}

PUT API:{
  http://localhost/update/:username  (username will be provided by the user as param)
  This API will allow you to update the data of an existing user
}

