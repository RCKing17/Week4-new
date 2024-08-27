const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Dummy user data
const users = [
  { username: 'user1', birthdate: '1990-01-01', age: 34, email: 'user1@example.com', password: 'password1', valid: true },
  { username: 'user2', birthdate: '1985-05-15', age: 39, email: 'user2@example.com', password: 'password2', valid: true },
  { username: 'user3', birthdate: '1992-07-21', age: 32, email: 'user3@example.com', password: 'password3', valid: true }
];

// Login route
app.post('/api/auth', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ ...user, password: undefined });
  } else {
    res.status(401).json({ valid: false });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
