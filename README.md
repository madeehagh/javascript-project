#weather-app
This is a project to understand callback functionalities in node.js.
Public URL to get weather details are used to infer weather predictions.
Response should be:       
    `Current Temperature, 
    Feels Like Temperature, and
    Place(for which the query has been done)`                                                        
More fields can be added as per need basis.

#Input Format
User is supposed to give place name in command line.         
 **node weatherServiceApp.js "amsterdam"** 

#Output Format
`{
'current temperature': 25,
'feels like': 26,
place: 'Amsterdam, North Holland, Netherlands'
}`

#Install
Import the project as node.js project in IDE

#Plugins added
nodemon

#Main File
weatherServiceApp.js

#Improvements
1. Refactor callbacks to Promise
2. Make this accessible through REST APIs
3. async await





