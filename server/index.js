// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

const express = require('express');
const session = require('express-session');
const users = require('./User');

const app = express();
const port = 3000;

app.use(express.json());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

app.post('/api/auth', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    user.isAuthenticated = true;
    user.sessionToken = 'some_generated_token';
    req.session.token = user.sessionToken;
    res.json({ message: 'Login successful', sessionToken: user.sessionToken });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
