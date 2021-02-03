# Skin-Condition-Wiki

### General Information
* Skin Condition is a website about skin condition wiki. This project is implemented using :
* Node JS (Express js Framework) V12.17.0
* React JS Library V17.0.1
* MySQL DB 

## The project is split into two branches : Frontend and Backend


## Connecting to DB :
* first you need to install Xampp(or and other server).
* after installation run the program and then start both (Apache and MySQL).
* then run your backEnd server.
        
## BackEnd : 
* Written in Express Js Freamework based on Node JS (runtime environment).

### it has a set of folders :
* MysqlDB : contains API based on MySQL.
* node_modules : contains all your packages to run the server correctly.
* test : contains a file (apptest.js) for unit testing of API.

### it also has a couple important files :
* index.js : contains the code of the BackEnd server . 
* .env : has hidden information belong to your website .

### some of the Packages used : 
* express      => to make an express js app.
* mysql        => to easily handle with mysql DB.
* dotenv       => to store configuration in the environment separate from code is based on.
* body-parser  => to parsing the incoming request bodies in a middleware before you handle it.
* nodemon      => to automatically restarting the node application when file changes in the directory are detected.
* mocha        => framework running on NodeJS and in the browser.
* chai         => assertion library for NodeJS and the browser.

### how to setup :
* Download Backend folder as ZIP
* Extract Backend.zip folder.
* Right click on Backend folder and then open (git bash tool) or any cmd you like in this directory.
* Type these commands :

```
$ npm install 
$ npm run dev
```

### if you want to test your API use this command instead : 
```
$ npm test                      
```

## FrontEnd :

Which is a set of web pages implemented using React js Library.

Some of the packages used in this section (axios {dealing with API} , react-bootstrap {design} , @material-ui/core {design}, Formik {validation for Forms}).

### how to setup :

* Download Frontend folder as ZIP
* Extract Frontend.zip folder.
* Right click on Frontend folder and then open (git bash tool) or any cmd you like in this directory.
* Type these commands :

```
$ npm install
$ npm start
```

* then your default web browser opens by itself and Front-end server running on port (3000 if it's available).

* if (:3000 not available) cmd tool will ask you to use a different port.

* finally it is done , enjoy it :)
* note that this aplication doesn't support sign up feature which meansthat all the usrs are already exist in the system. So to test the application use the following accout to sign in. email: user1@abc.com     password:123456789
