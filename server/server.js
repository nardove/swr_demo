const express = require('express');
const app = express();
const PORT = 8080;

const originalUsers = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Third Doe' },
  { id: 4, name: 'Fourth Doe' },
  { id: 5, name: 'Fifth Doe' },
];

const data = {
  users: [...originalUsers],
};

app.use(express.json());

// Reset users data to original state
app.post('/api/reset', (req, res) => {
  data.users = [...originalUsers];

  res.status(200).json({ ...data });
});

// Get all current users
app.get('/api/users', (req, res) => {
  res.status(200).json({ ...data });
});

// Delete user by id
app.delete('/api/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = data.users.findIndex((user) => user.id === id);
  if (index === -1) {
    return res.status(404).send('User not found');
  }
  data.users.splice(index, 1);
  res.status(200).json({ ok: true, id });
});

// Create new user
app.post('/api/users', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send('Name is required');
  }

  // get max id and increment by 1
  const id =
    data.users.reduce((acc, user) => (user.id > acc ? user.id : acc), 0) + 1;
  data.users.push({ id, name });
  res.status(201).json({ ok: true, id, name });
});

// Trow 500 error
app.get('/api/broken', (req, res) => {
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Server is running @ http://localhost:${PORT}`);
});
