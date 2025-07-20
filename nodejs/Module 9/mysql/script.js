const mysql = require("mysql2");

// Create a connection to MySQL database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // Change if you have a different MySQL user
  password: "123", // Change if your MySQL has a password
  database: "mydb",
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// 1️⃣ **CREATE: Insert a new user**
function createUser(name, email) {
  const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
  connection.query(sql, [name, email], (err, results) => {
    if (err) {
      console.error("Error inserting user:", err);
      return;
    }
    console.log("User created with ID:", results.insertId);
  });
}

// 2️⃣ **READ: Fetch all users**
function getUsers() {
  const sql = "SELECT * FROM users";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      return;
    }
    console.log("Users:", results);
  });
}

// 3️⃣ **UPDATE: Update a user by ID**
function updateUser(id, newName, newEmail) {
  const sql = "UPDATE users SET name = ?, email = ? WHERE id = ?";
  connection.query(sql, [newName, newEmail, id], (err, results) => {
    if (err) {
      console.error("Error updating user:", err);
      return;
    }
    console.log(`User with ID ${id} updated`);
  });
}

// 4️⃣ **DELETE: Delete a user by ID**
function deleteUser(id) {
  const sql = "DELETE FROM users WHERE id = ?";
  connection.query(sql, [id], (err, results) => {
    if (err) {
      console.error("Error deleting user:", err);
      return;
    }
    console.log(`User with ID ${id} deleted`);
  });
}

// Run CRUD operations
createUser("Alice", "alice@example.com");
setTimeout(() => getUsers(), 1000);
setTimeout(() => updateUser(1, "Alice Updated", "alice_updated@example.com"), 2000);
setTimeout(() => getUsers(), 3000);
setTimeout(() => deleteUser(1), 4000);
setTimeout(() => getUsers(), 5000);

// Close connection after operations
setTimeout(() => connection.end(), 6000);
