# ToDoList Web Application

This project is a "To-Do List using Java" application developed using Java, featuring a robust user authentication system, seamless connectivity with a MySQL database, and hosted on the reliable Tomcat server. This To-Do List application aims to provide users with an intuitive and efficient platform for organizing, prioritizing, and collaborating on tasks.


## Table of Contents:
- Features
- Technologies Used
- Setup Instructions
- Database Setup
- Usage
- File Structure
- Steps
- License
- Contributing


## Features:
- User registration and login with password validation.
- Session management for user authentication.
- CRUD operations for managing ToDo tasks.
- Responsive design using CSS and JavaScript.


## Technologies Used: 

Software Requirements:
- Front-End Languages: HTML, CSS, JavaScript
- Back-End Languages: Java
- Java Servlet Pages (JSP)
- .java files for servlet
- Database Server: MySQL Workbench 8.0 CE
- Tomcat Server
- Web Browsers: Google / Chrome / Microsoft Edge 


## Setup Instructions: 
1. Clone the repository
```bash
git clone https://github.com/saswati-26/ToDo-List-Using-JAVA.git
cd ToDo-List-Using-JAVA
```
2. Database Configuration

- Install MySQL and create a database named __todolist__.
- Update __ToDoListRegisterServlet.java__ and __ToDoListLoginServlet.java__ with your database credentials (url, cname, pass).

3. Deployment

- Deploy the project on a Java Servlet container (e.g., omcat's webapps directory).
- Start Tomcat server

## Database Setup:

Ensure your MySQL database is set up with the following schema:
```mysql
CREATE DATABASE todolist;

USE todolist;

CREATE TABLE user (
    uid INT AUTO_INCREMENT PRIMARY KEY,
    uname VARCHAR(50) NOT NULL,
    uemail VARCHAR(100) NOT NULL,
    upwd VARCHAR(50) NOT NULL
);
```
## Usage:
1. Access the Application:
- Open a web browser and go to 
```bash 
http://localhost:8080/ToDoList.
```
2. Register
- Access __signup.jsp__ to register a new user with a valid username, email, and password.

3. Login
- Access __login.jsp__ to log in using your registered username and password.

4. ToDoList Management
- Once logged in, manage your ToDo tasks in __index.jsp__.

5. Logout:
- Click on the logout button to end your session securely.


## File Structure:
```
├── src \ main
│   ├── java
|   |   ├── Myservlet.java
|   │   ├── ToDoListLoginServlet.java
|   │   ├── ToDoListLogoutServlet.java
|   │   └── ToDoListRegisterServlet.java
|   ├── webapp
|   │   ├── META-INF
|   │   |   └── MANIFEST.MF
|   │   └── WEB-INF
|   |       └── backgroundimage.jpeg
|   |       └── index.css
|   |       └── index.js
|   |       └── index.jsp
|   |       └── login.css
|   |       └── login.js
|   |       └── login.jsp
|   |       └── signup.jsp
|   │       └── lib
|   │           └── mysql-connector-java-<version>.jar
```


## Steps:
``` 
    1.	Create a dynamic web project
    2.	Add the required jars
    3.	Add the Tomcat Server to eclipse
    4.	Create login.jsp page
    5.	Create signup.jsp page
    6.	Create index.jsp page
    7.	Create database
    8.	Write the servlet code and link correctly
    9.	Create a directory structure
    10.	Create a Servlet
    11.	Compile the Servlet
    12.	Create a deployment descriptor
    13.	Start the server and deploy the project
    14.	Access the servlet
    15. Load driver using .class form
    16. Create connection
    17. Write query – execute update (update data in database), execute query (retrieve data from the database) and execute (does both update and retrieve of data from database)
    18. Destroy connection

```


## License:
This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License. See the LICENSE file for details.


## Contributing:

Contributions are welcome! Fork the repository and submit a pull request. Happy Coding!