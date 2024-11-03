Paytm Clone

This project is a basic Paytm clone developed using the MERN (MongoDB, Express, React, Node.js) stack. It supports core features such as signing in, signing up, searching for users, and sending money with secure session handling to avoid balance inconsistencies. The project was built as part of Course Cohort 2.0.

Table of Contents

Features

Tech Stack

Installation

Usage

Folder Structure

APIs

Future Enhancements

License


Features

User Authentication: Secure Sign-in and Sign-up with password hashing.

Search Users: Find other registered users by username or email.

Send Money: Transfer money between users without errors or imbalance issues.

Session Management: Proper session handling to prevent unauthorized access and ensure accurate balance management.


Tech Stack

Frontend: React, Tailwind CSS (for UI styling)

Backend: Node.js, Express

Database: MongoDB

Authentication: JSON Web Tokens (JWT)

Session Management: Sessions to handle secure transactions and prevent any balance inconsistencies


Installation

1. Clone the repository:

git clone https://github.com/yourusername/paytm-clone.git
cd paytm-clone


2. Install dependencies:

Install backend dependencies:

cd server
npm install

Install frontend dependencies:

cd ../client
npm install



3. Environment Variables:

Create a .env file in the server directory.

Add the following variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SESSION_SECRET=your_session_secret



4. Start the Application:

Start the backend server:

cd server
npm start

Start the frontend development server:

cd ../client
npm start

The app should now be running locally.




Usage

Sign Up: Register with a unique username, email, and password.

Sign In: Log in with your credentials to access the platform.

Search User: Use the search bar to find other registered users.

Send Money: Send money to other users; the system will prevent any issues with balance inconsistencies.


Folder Structure

paytm-clone/
├── client/                # React frontend
│   ├── public/            # Static assets
│   └── src/
│       ├── components/    # Reusable components (e.g., Navbar, Footer)
│       ├── pages/         # Main pages (e.g., SignIn, SignUp, Dashboard)
│       ├── services/      # API call functions
│       └── App.js         # Main React app component
├── server/                # Express backend
│   ├── config/            # Database and session configurations
│   ├── controllers/       # Business logic for each route
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   └── app.js             # Main Express app
└── README.md              # Project documentation

APIs

Authentication APIs

POST /api/auth/signup: Register a new user.

POST /api/auth/login: Log in with user credentials.


User APIs

GET /api/users/search: Search for users by username or email.


Transaction APIs

POST /api/transaction/send: Transfer money to another user, with error handling for balance management.


Future Enhancements

Payment History: Track past transactions for each user.

Wallet Top-Up: Enable users to add funds to their accounts.

Transaction Limits: Set daily or monthly transfer limits.

2-Factor Authentication: Enhance security for logins and transactions.

Notifications: Alert users of incoming funds and low balance.


License

This project is open-source and available under the MIT License.


---

Enjoy exploring and extending the functionality of this Paytm clone! Contributions and suggestions are always welcome.


