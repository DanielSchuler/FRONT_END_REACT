# React Blog Frontend

The **React Blog Frontend** is a web application built using React.js, designed to interact with the **BACKEND_NODEJS** backend. It provides users with a user-friendly interface to view, create, and search articles.

## Features

- **Homepage**: Displays the five latest articles from the backend.
- **Blog Page**: Lists all articles available in the backend.
- **Article Creation**: Allows users to create new articles.
- **Search**: Provides a search functionality to find articles by keywords.
- **Article Detail View**: Users can view detailed information for each article.

## Technologies Used

- **React.js**: Used for building the frontend user interface.
- **Axios**: Used for making HTTP requests to the **BACKEND_NODEJS** backend.
- **MongoDB**: The backend is connected to a MongoDB database for storing articles.
- **React Router**: Used for client-side routing to navigate between pages.

## Project Structure

The project structure follows a typical React application layout:

- `src/`: Contains the source code for the React application.
  - `components/`: React components used throughout the application.
  - `pages/`: Contains different pages of the application (Homepage, Blog, Article Detail, etc.).
  - `services/`: Axios service for making API requests to the backend.
  - `assets/`: Static assets such as images and styles.
  - `App.js`: The main application component.
  - `index.js`: Entry point of the application.
- `public/`: Static assets that are publicly accessible.

## Getting Started

1. Ensure the **BACKEND_NODEJS** backend and MongoDB are up and running.

2. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/your-react-blog-frontend.git

3 Install dependencies:
cd your-react-blog-frontend
npm install

4 Start the BACKEND_NODEJS. application:
npm start
5 Start the MongoDB:
mongod.exe
6 Start the React application:
npm start


Open your web browser and access the application at http://localhost:3000.

Usage
On the homepage, you'll find the latest articles.
Navigate to the Blog page to see all articles.
Use the search functionality to find articles by keywords.
Create new articles through the frontend.
Click on an article to view its detailed information.
