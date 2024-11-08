# Paytm Clone

This project is a basic Paytm clone developed using the MERN (MongoDB, Express, React, Node.js) stack. It supports core features such as signing in, signing up, searching for users, and sending money with secure session handling to avoid balance inconsistencies. The project was built as part of **Course Cohort 2.0**.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [APIs](#apis)
- [Future Enhancements](#future-enhancements)
- [License](#license)


## Features
- **User Authentication**: Secure Sign-in and Sign-up with password hashing.
- **Search Users**: Find other registered users by username or email.
- **Send Money**: Transfer money between users without errors or imbalance issues.
- **Session Management**: Proper session handling to prevent unauthorized access and ensure accurate balance management.

## Tech Stack
- **Frontend**: React, Tailwind CSS (for UI styling)
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Session Management**: Sessions to handle secure transactions and prevent any balance inconsistencies

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/paytm-clone.git
    cd paytm-clone
    ```

2. **Install dependencies**:
    - Backend:
      ```bash
      cd server
      npm install
      ```
    - Frontend:
      ```bash
      cd ../client
      npm install
      ```

3. **Environment Variables**:
   Create a `.env` file in the `server` directory. Add the following variables:
    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    SESSION_SECRET=your_session_secret
    ```

4. **Start the Application**:
    - Start the backend server:
      ```bash
      cd server
      npm start
      ```
    - Start the frontend development server:
      ```bash
      cd ../client
      npm start
      ```

## Usage
- **Sign Up**: Register with a unique username, email, and password.
- **Sign In**: Log in with your credentials to access the platform.
- **Search User**: Use the search bar to find other registered users.
- **Send Money**: Send money to other users; the system will prevent any issues with balance inconsistencies.

## Folder Structure
