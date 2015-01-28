Plantronics Headset Status Web Service
=============
This is a simple web service that stores headset status for IC users with Plantronics headsets. There is a companion repo at https://github.com/InteractiveIntelligence/Plantronics
which is the client add-in which sends the status to the web service


Web Endpoints
=============
The server has a couple web endpoints available
**"/"** the root of the service hosts a web page with all the users and their status.
**"/status"** returns a JSON object with all of the servers and their status.
**"/statuschange"** the endpoint for the POST for a status update, the body of the message should look like this
```
{
    "userId": "cic user id",
    "station": "station name",
    "status": "text of the user's status",
    "loggedIn": true,
    "onPhone" : true,
    "headsetConnected" : true,
    "device": "Plantronics DA80",
    "serial": "23423db234c234A24ac",
    "isMuted" : false,

}
```

# Deploying to the Cloud
========================
**Heroku**  
Use this button to deploy the application right to Heroku.  
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/InteractiveIntelligence/PlantronicsHeadsetStatusWebService)
