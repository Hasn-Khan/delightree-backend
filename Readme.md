Node.js Express API with MongoDB
Overview
This is a RESTful API built with Node.js, Express, and MongoDB. The API allows users to perform CRUD operations and manage data in a MongoDB database.


Features
1. Question: Calculate the total number of posts, comments, likes, and views for each user, grouped by age range.

| Method | Endpoint          | Description                          |
|--------|-------------------|--------------------------------------|
| GET    | /stats             | Get user statistics by age range     |


Prerequisites
Before setting up the project, ensure that you have the following installed:

Node.js (v18.x or later)
MongoDB (either local or using MongoDB Atlas)
Git (optional, for version control)
MongoDB Atlas account
MongoDB Atlas connection string


Project Setup
1. Clone the repository
First, clone this repository to your local machine:

```
git clone https://github.com/Hasn-Khan/delightree-backend.git
```

Navigate into the project directory:

```
cd your-repo-name
```

2. Install dependencies
Use npm to install the required dependencies:

```
npm install
```


3. Setup environment variables
Create a .env file in the root directory of the project. Add the following environment variables:


# Server configuration
```
PORT=3000
```

# MongoDB configuration

MONGO_URI=mongodb://localhost:27017/your-database-name
For MongoDB Atlas users:
Replace the MONGO_URI with your MongoDB Atlas connection string, and substitute your database username, password, and cluster details:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/your-database-name?retryWrites=true&w=majority
```


4. Run the server


Start the development server using Nodemon:

```
npm start
```

Run seeding script at
```
node seed.js
```

This will run the app at ```http://localhost:3000.```

├── controllers        # Business logic and request handling
├── models             # Mongoose models for MongoDB collections
├── routes             # API route definitions
├── config             # Configurations (database, environment variables, etc.)
├── .env               # Environment variables (not in version control)
├── index.js          # Entry point to start the Node.js server
└── package.json       # Project metadata and dependencies


API Endpoints
| Method | Endpoint          | Description                          |
|--------|-------------------|--------------------------------------|
| POST   | /users             | Create a new user                    |
| POST   | /posts             | Create a new post                    |
| POST   | /comments          | Create a new comment                 |
| POST   | /saveViews         | Save views for a post                |
| POST   | /saveLikes         | Save likes for a post                |
| POST   | /saveFollowers     | Save follower information            |
| POST   | /saveTags          | Save tags for a post                 |
| POST   | /savePostTags      | Associate tags with a post           |
| GET    | /stats             | Get user statistics by age range     |



Database Configuration
1. MongoDB Local Setup
If you're using MongoDB locally, make sure you install it and start the MongoDB service:


Sign up for a free MongoDB Atlas account and create a new cluster.
Connect to your cluster using the provided connection string.
Replace the MONGO_URI in your .env file with the Atlas URI.
