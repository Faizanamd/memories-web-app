# Memories Web Application

This project is a Memories Web Application comprising both frontend and backend components. It enables users to manage memories by performing CRUD (Create, Read, Update, Delete) operations.

## Frontend

### Home.jsx

The `Home.jsx` file is the main component responsible for rendering the memories application's user interface. It utilizes React.js along with various hooks to manage state and effects. The component integrates functionalities for adding, updating, and deleting memories. It communicates with the backend server using Axios for HTTP requests.

## Backend

### `package.json`

The `package.json` file in the backend directory contains metadata about the Node.js application, including dependencies and scripts for running the server.

### `index.js`

The `index.js` file serves as the entry point for the backend server. It configures the Express.js application, sets up middleware for parsing requests, enabling CORS, and serving static files. It also defines routes for handling CRUD operations on memory posts.

### `post.routes.js`

The `post.routes.js` file defines API routes for interacting with memory posts. It sets up endpoints for creating, reading, updating, and deleting memory posts. The file also integrates middleware for file uploads.

### `config.js`

The `config.js` file contains configuration settings, including the MongoDB connection string. It establishes a connection to the MongoDB database using Mongoose.

## Technologies Used

- **Frontend**:
  - React.js
  - Axios
  - React Toastify

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - Body-parser
  - CORS
  - Nodemon (for development)

## Getting Started

1. Clone the repository.
2. Navigate to the frontend and backend directories separately.
3. Install dependencies using `npm install`.
4. Start the frontend and backend servers using `npm start`.
5. Access the application in your web browser.


