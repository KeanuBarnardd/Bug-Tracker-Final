# Bug Tracker 
This is a front end web application built with React, the application allows users to keep track and log bugs they have on their personal projects. Creating a new bug log prompts users to add specific information to define and categorise the bug. Allowing the user to neatly organise and understand which logs need to be completed and how they need to be solved. 

## What was used to create 'Bug Tracker' 
The bug tracker was created mainly with **React, Html, scss and React**. Currently working on making this application full stack incoperating MongoDB and NodeJs for the back end. 

## How it works 
The users dashboard stores all of the current bugs that need to be resolved as well as displays the how many bugs you have for each 'priority' handler. Priority is used to determine which bug needs to be completed first and the user can define that on creation or editting of their bug log.    
  
![Dashboard Image](./bug-tracker/src/ReadMeImgs/dash.PNG)


## Logging Bugs 
When a user logs a bug they have to define it with these values. 
-Title, To define the overall bug.  
-Description, To detail what the problem is.   
-Steps, To help the user resolve the bug.   
-Priority, In which order of importance in which this bug needs to be completed.  
-Date, The date in which this bug is created.     
-Version, Lets the user define what the current version their application is on.
   
![Dashboard Image](./bug-tracker/src/ReadMeImgs/edit.PNG)  

## Completing Bugs
When a user completes a bug then it will display their completed bugs inside their profile view.  
  
![Dashboard Image](./bug-tracker/src/ReadMeImgs/profile.PNG)
