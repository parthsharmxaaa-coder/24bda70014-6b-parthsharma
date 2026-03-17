# 🚀 Express + MongoDB Authentication API

A beginner-friendly authentication API built using Node.js, Express, and MongoDB.
This project demonstrates user registration, login, JWT authentication, password hashing, and middleware usage.

---

## 📌 Features

* User Registration
* User Login
* JWT-based Authentication
* Protected Route (`/users/me`)
* Password Hashing using Argon2
* Centralized Error Handling
* Request Logging Middleware
* Optional SolarWinds Log Integration

---

## 🛠 Tech Stack

* Node.js (ES Modules)
* Express 5
* MongoDB + Mongoose
* Argon2
* JSON Web Token (JWT)
* Axios
* http-errors & http-status-codes
* pnpm / npm
* Nodemon

---

## 📁 Project Structure

```
config/
  db.js
  solarwinds.js
controllers/
  auth.controller.js
middleware/
  auth.middleware.js
  error.middleware.js
  logger.middleware.js
models/
  user.model.js
routes/
  auth.routes.js
utils/
  jwt.js
index.js
.env
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone <your-repo-url>
cd auth-api
```

---

### 2️⃣ Install Dependencies

Using npm:

```
npm install
```

Using pnpm:

```
pnpm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=1d
SOLARWINDS_TOKEN=
NODE_ENV=development
```

---

### 4️⃣ Run the Server

Development mode:

```
npm run dev
```

Production mode:

```
npm start
```

---

## 🚀 API Endpoints

### 🔹 Base URL

```
http://localhost:3000
```

---

### 🔹 Register User

**POST** `/users/register`

Request:

```json
{
  "fullName": "Jane Doe",
  "email": "jane@example.com",
  "password": "strongPassword123"
}
```

Response:

```json
{
  "message": "User registered successfully",
  "data": {
    "id": "...",
    "fullName": "Jane Doe",
    "email": "jane@example.com"
  }
}
```

---

### 🔹 Login User

**POST** `/users/login`

Request:

```json
{
  "email": "jane@example.com",
  "password": "strongPassword123"
}
```

Response:

```json
{
  "message": "Login successful",
  "data": {
    "token": "<jwt>",
    "id": "...",
    "fullName": "Jane Doe",
    "email": "jane@example.com"
  }
}
```

---

### 🔹 Get Current User (Protected)

**GET** `/users/me`

Header:

```
Authorization: Bearer <jwt>
```

Response:

```json
{
  "message": "User fetched successfully",
  "data": {
    "_id": "...",
    "fullName": "Jane Doe",
    "email": "jane@example.com"
  }
}
```

---

## 🔐 Authentication Flow

1. User registers with email & password
2. Password is hashed using Argon2
3. User logs in → receives JWT token
4. Token is sent in headers for protected routes
5. Server verifies token and allows access

---

## 🧪 Testing

You can test the API using:

* Postman (Desktop recommended)
* Thunder Client (VS Code extension)
* cURL

---

## ⚠️ Common Errors

| Error                     | Cause                       |
| ------------------------- | --------------------------- |
| 401 Unauthorized          | Missing or invalid token    |
| Invalid email/password    | Wrong credentials           |
| MongoDB connection failed | Wrong URI or network access |
| Missing JWT_SECRET        | Not set in `.env`           |

---

## 📚 Learning Outcomes

* REST API design
* Authentication using JWT
* Password security with hashing
* Middleware architecture
* Error handling in Express
* MongoDB schema design

---

## 📌 Notes

* Do not commit `.env` file to GitHub
* Use strong secrets in production
* SolarWinds logging is optional

---

## 👨‍💻 Author

Your Name

---

## ⭐ Future Improvements

* Refresh Tokens
* Role-based Authentication
* Email Verification
* Password Reset
* Frontend Integration (React)

---

## 🏁 Conclusion

This project is a complete beginner-friendly implementation of an authentication system using modern backend technologies.

---
