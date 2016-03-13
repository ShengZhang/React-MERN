# React-MERN
- Learn React with MERN(Mongo-Express-React-Node) stack according to learning class: https://hashnode.com/post/react-tutorial-using-mern-stack-ciiyus9m700qqge53mer0isxz

# Install Babel 
npm install --global babel-cli
npm install babel-preset-react

Then run transform.sh

- QUESTIONS
  - Babel doesn't recognize "console.log" and treats it as syntax error, why? My bad, I should write console.log in render() instead of React.createClass()


## 4. Dynamic Updates
Dynamically update the data model and re-render.

### 4.1 Create initial state
Start using state, prepare for dynamic updates.


### 4.2 Update state
Dynamically update the state and see the magic.

### 4.3
Communicate from child to a parent component.

## 5. Data on server
Move data to the server.

### 5.1 GET API
+Implement a GET API on the server to return a list of records.

### 5.2 POST API
Implement a POST API to add a new record.

### 5.3 Use the GET API
Change client code to fetch data from server.

### 5.4 Use the POST API
Change client code to send data to server for Add record.

## 6. Save to database
Persist the data in a database.

### 6.1 Initialize
Write a script to initialize a MongoDB collection.
Steps:
 - use "mongod" in shell to start a default connection to mongodb
 - "mongo ./scripts/init.mongo.js" in shell to initialize bugsdb collections

### 6.2 Connect and Read
Create a permanent connection to the DB, change GET API to read from DB.

### 6.3 Write to DB
Change POST API to insert a record into the DB.

## 7 Build and Bundle

### 7.1 Browserify

### 7.2 Automate with gulp
Use gulp to automate the manual tasks.
TODO:
 - Learn more about pipe steps in gulpfile.js

