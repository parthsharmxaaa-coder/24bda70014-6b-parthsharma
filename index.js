import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";

import { loggerMiddleware } from "./middleware/logger.middleware.js";
import { errorMiddleware } from "./middleware/error.middleware.js";

dotenv.config();

const app = express();

await connectDB();

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.send(`
    <html>
    <head>
      <title>Auth API</title>
      <style>
        body{
          font-family: Arial;
          background:#0f172a;
          color:white;
          padding:40px;
        }
        h1{color:#38bdf8}
        .box{
          background:#1e293b;
          padding:20px;
          margin:15px 0;
          border-radius:10px;
        }
        code{
          color:#22c55e;
        }
      </style>
    </head>

    <body>

      <h1>🚀 Auth API Running</h1>
      <p>Your Express authentication API is working.</p>

      <div class="box">
        <h2>GET</h2>
        <p>Used to fetch data from the server.</p>
        <code>GET /users/me</code>
      </div>

      <div class="box">
        <h2>POST</h2>
        <p>Used to send data to the server.</p>
        <code>POST /users/register</code><br>
        <code>POST /users/login</code>
      </div>

      <div class="box">
        <h2>PUT / PATCH</h2>
        <p>Used to update existing data.</p>
      </div>

      <div class="box">
        <h2>DELETE</h2>
        <p>Used to delete data from the server.</p>
      </div>

      <div class="box">
        <h2>Project Features</h2>
        <ul>
          <li>User Registration</li>
          <li>User Login</li>
          <li>JWT Authentication</li>
          <li>Password Hashing with Argon2</li>
          <li>Protected Route</li>
        </ul>
      </div>

    </body>
    </html>
  `);
});

app.use("/users", authRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});