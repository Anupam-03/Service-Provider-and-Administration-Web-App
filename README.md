# Service-Provider-and-Administration-Web-App

Welcome to the Service-Provider-and-Administration-Web-App repository! This is a MERN Stack project where users can log in, explore our services, and contact us to book any service. The platform provides a seamless user experience for managing service bookings, leveraging the power of MongoDB, Express, React, and Node.js to ensure a robust and responsive application.

<!-- ### Video Explanation Functionalities
https://github.com/SD007CSE/Project-Management-App/assets/88923088/21594ae3-bbcd-4b2b-83b0-fa322f419f83
-->
### Example of Home Page
![image](https://github.com/Anupam-03/Admin_Dashboard/assets/116145439/6b816cde-5185-4647-9b32-60d919fc8b4d)
![image](https://github.com/Anupam-03/Admin_Dashboard/assets/116145439/bfe15b83-c2dd-41ea-a6a9-a53e12e73c57)

## Key Features

1. **Authentication and Authorization**:
   - **Admins**: Full access including login, registration, and administrative controls.
   - **Employees**: Login and access to Service details relevant to their roles.
   - **Users**: Basic access to the home page and About-Us information.

2. **Project Management for Admins**:
   - Add and delete Employees.
   - Assign projects to employees.
   - Comprehensive service control and oversight.

3. **Project Access for Employees**:
   - View projects assigned to them.
   - Access detailed project information and updates.

4. **User Access**:
   - View the home page.
   - Access service information available to all users, ensuring transparency and engagement.

## Tech Stack
- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: MongoDB
- **Password Hashing**: bcrypt
- **Programming Language**: JavaScript


## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Anupam-03/Admin_Dashboard.git
   cd Admin-Dashboard-app
   ```
<br>

2. **Add the .env file**:

![image](https://github.com/Anupam-03/Admin_Dashboard/assets/116145439/f056ae4d-0d99-4a89-830d-5f5305eb36c6)

- Add your MongoDB URL and set a JWT Secret key.
<br>

3. **Add the configuration file for MongoDB Atlas for Database access**:
- Add users, contacts and services as collection.
  
   - ![image](https://github.com/Anupam-03/Admin_Dashboard/assets/116145439/582f6fa5-ddcb-42d0-867e-5cba4528ae6b)
   - ![image](https://github.com/Anupam-03/Admin_Dashboard/assets/116145439/90b6b4d0-3dd4-4db9-aba6-2077096007bf)
   - ![image](https://github.com/Anupam-03/Admin_Dashboard/assets/116145439/3811bc2d-1c86-413d-bdf0-8b77d062a117)

  <br>
  
4. **Run on you local device**:
   - you have to run server and client directory in two separate Terminal
     <br>
     
   i ) Run Backend
   
   ```bash
   cd server
   nodemon server.js
   ```
   <br>
   ii ) Run Frontend
   
   ```bash
   cd client
   npm run dev
   ```
<br>
<hr>
<br>
                                                                                  Thank You 😀 for Visiting this Repo 
