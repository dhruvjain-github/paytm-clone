<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paytm Clone - README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1, h2, h3 {
            color: #0056b3;
        }
        code {
            background-color: #f4f4f4;
            padding: 3px 5px;
            border-radius: 3px;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            overflow: auto;
            border-radius: 3px;
        }
        ul {
            margin-top: 0;
        }
    </style>
</head>
<body>

    <h1>Paytm Clone</h1>
    <p>
        This project is a basic Paytm clone developed using the MERN (MongoDB, Express, React, Node.js) stack. It supports core features such as signing in, signing up, searching for users, and sending money with secure session handling to avoid balance inconsistencies. The project was built as part of <strong>Course Cohort 2.0</strong>.
    </p>

    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#folder-structure">Folder Structure</a></li>
        <li><a href="#apis">APIs</a></li>
        <li><a href="#future-enhancements">Future Enhancements</a></li>
        <li><a href="#license">License</a></li>
    </ul>

    <h2 id="features">Features</h2>
    <ul>
        <li><strong>User Authentication</strong>: Secure Sign-in and Sign-up with password hashing.</li>
        <li><strong>Search Users</strong>: Find other registered users by username or email.</li>
        <li><strong>Send Money</strong>: Transfer money between users without errors or imbalance issues.</li>
        <li><strong>Session Management</strong>: Proper session handling to prevent unauthorized access and ensure accurate balance management.</li>
    </ul>

    <h2 id="tech-stack">Tech Stack</h2>
    <ul>
        <li><strong>Frontend</strong>: React, Tailwind CSS (for UI styling)</li>
        <li><strong>Backend</strong>: Node.js, Express</li>
        <li><strong>Database</strong>: MongoDB</li>
        <li><strong>Authentication</strong>: JSON Web Tokens (JWT)</li>
        <li><strong>Session Management</strong>: Sessions to handle secure transactions and prevent any balance inconsistencies</li>
    </ul>

    <h2 id="installation">Installation</h2>
    <ol>
        <li><strong>Clone the repository</strong>:
            <pre><code>git clone https://github.com/yourusername/paytm-clone.git
cd paytm-clone</code></pre>
        </li>
        <li><strong>Install dependencies</strong>:
            <ul>
                <li>Install backend dependencies:
                    <pre><code>cd server
npm install</code></pre>
                </li>
                <li>Install frontend dependencies:
                    <pre><code>cd ../client
npm install</code></pre>
                </li>
            </ul>
        </li>
        <li><strong>Environment Variables</strong>:
            <p>Create a <code>.env</code> file in the <code>server</code> directory. Add the following variables:</p>
            <pre><code>MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SESSION_SECRET=your_session_secret</code></pre>
        </li>
        <li><strong>Start the Application</strong>:
            <ul>
                <li>Start the backend server:
                    <pre><code>cd server
npm start</code></pre>
                </li>
                <li>Start the frontend development server:
                    <pre><code>cd ../client
npm start</code></pre>
                </li>
                <li>The app should now be running locally.</li>
            </ul>
        </li>
    </ol>

    <h2 id="usage">Usage</h2>
    <ul>
        <li><strong>Sign Up</strong>: Register with a unique username, email, and password.</li>
        <li><strong>Sign In</strong>: Log in with your credentials to access the platform.</li>
        <li><strong>Search User</strong>: Use the search bar to find other registered users.</li>
        <li><strong>Send Money</strong>: Send money to other users; the system will prevent any issues with balance inconsistencies.</li>
    </ul>

    <h2 id="folder-structure">Folder Structure</h2>
    <pre><code>paytm-clone/
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
└── README.md              # Project documentation</code></pre>

    <h2 id="apis">APIs</h2>
    <h3>Authentication APIs</h3>
    <ul>
        <li><code>POST /api/auth/signup</code>: Register a new user.</li>
        <li><code>POST /api/auth/login</code>: Log in with user credentials.</li>
    </ul>

    <h3>User APIs</h3>
    <ul>
        <li><code>GET /api/users/search</code>: Search for users by username or email.</li>
    </ul>

    <h3>Transaction APIs</h3>
    <ul>
        <li><code>POST /api/transaction/send</code>: Transfer money to another user, with error handling for balance management.</li>
    </ul>

    <h2 id="future-enhancements">Future Enhancements</h2>
    <ul>
        <li><strong>Payment History</strong>: Track past transactions for each user.</li>
        <li><strong>Wallet Top-Up</strong>: Enable users to add funds to their accounts.</li>
        <li><strong>Transaction Limits</strong>: Set daily or monthly transfer limits.</li>
        <li><strong>2-Factor Authentication</strong>: Enhance security for logins and transactions.</li>
        <li><strong>Notifications</strong>: Alert users of incoming funds and low balance.</li>
    </ul>

    <h2 id="license">License</h2>
    <p>This project is open-source and available under the MIT License.</p>

    <p>---<br>Enjoy exploring and extending the functionality of this Paytm clone! Contributions and suggestions are always welcome.</p>

</body>
</html>
