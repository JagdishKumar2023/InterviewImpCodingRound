import { useEffect, useState } from "react";
import "./Tabledata.css";

const API = "https://jsonplaceholder.typicode.com/users";

const Tabledata = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const { id, name, email, address } = user;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{address.city || "N/A"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tabledata;

// from the server side code in save data in data base

//// server.js
// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// const app = express();
// const port = 5000;

// app.use(bodyParser.json());

// // MongoDB connection
// mongoose.connect("mongodb://localhost:27017/userData", { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.error("MongoDB connection error:", err));

// // Create a User Schema
// const userSchema = new mongoose.Schema({
//   id: Number,
//   name: String,
//   email: String,
//   city: String,
// });

// const User = mongoose.model("User", userSchema);

// // Endpoint to save users to the database
// app.post("/api/save-users", async (req, res) => {
//   try {
//     const users = req.body.users;  // Array of users
//     await User.insertMany(users);  // Save to MongoDB
//     res.status(200).send("Users saved successfully!");
//   } catch (err) {
//     console.error("Error saving users:", err);
//     res.status(500).send("Error saving users to the database");
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
