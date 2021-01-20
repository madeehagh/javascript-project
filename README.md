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
 **node weatherServiceApp.js** 

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
express     
axios

#Main File
weatherServiceApp.js

#Rest API
http://localhost:7070/weather?search=Amsterdam
This will return current temperature, feels like and place of matching location of the given input      
eg: API http://localhost:7070/weather?search=amst will return output of Amsterdam

