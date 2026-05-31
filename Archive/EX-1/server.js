import express from "express";

const app = express();
app.use(express.json());

// In-memory user store
let users = [
  { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com" },
  { id: 2, name: "Bob Smith", email: "bob.smith@example.com" },
  { id: 3, name: "Charlie Lee", email: "charlie.lee@example.com" },
  { id: 4, name: "Diana Prince", email: "diana.prince@example.com" },
  { id: 5, name: "Ethan Brown", email: "ethan.brown@example.com" },
  { id: 6, name: "Fiona Garcia", email: "fiona.garcia@example.com" },
  { id: 7, name: "George King", email: "george.king@example.com" },
  { id: 8, name: "Hannah White", email: "hannah.white@example.com" },
  { id: 9, name: "Ian Black", email: "ian.black@example.com" },
  { id: 10, name: "Jane Miller", email: "jane.miller@example.com" },
  { id: 11, name: "Kyle Green", email: "kyle.green@example.com" },
  { id: 12, name: "Laura Adams", email: "laura.adams@example.com" },
  { id: 13, name: "Mike Davis", email: "mike.davis@example.com" },
  { id: 14, name: "Nina Torres", email: "nina.torres@example.com" },
  { id: 15, name: "Oscar Young", email: "oscar.young@example.com" },
  { id: 16, name: "Paula Scott", email: "paula.scott@example.com" },
  { id: 17, name: "Quentin Wright", email: "quentin.wright@example.com" },
  { id: 18, name: "Rachel Hall", email: "rachel.hall@example.com" },
  { id: 19, name: "Steve Baker", email: "steve.baker@example.com" },
  { id: 20, name: "Tina Morgan", email: "tina.morgan@example.com" },
];
//Task 2: Logger Middleware
app.use((req, res, next) => {
  const timeStamp = new Date().toISOString();
  console.log(`${timeStamp} ${req.method} ${req.url}`)
  next();
})
//Task 3 Get All users
app.get('/users', (req, res) => {
  res.status(200).json(users);
})
//Task 4 Get user by ID
app.get('/users/:id', (req, res) => {
  let userId = Number(req.params.id);
  const user = users.find((user) => user.id === userId);
  if (!user) {
    return res.status(404).json({ error: `Cannot find user!` })
  }
  res.status(200).json(`${user.name} is removed!`);
  // users.forEach((user) => {
  //   if(user.id === userId){
  //     // userId = JSON.stringify;
  //     res.status(200).JSON.stringify(user);
  //   }
  // })

})
//Task 5 create a new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: `Name and Email must be provided!` });
  }
  let newUser = {
    id: (users.length) + 1,
    name, email
  };
  users.push(newUser);
  return res.status(201).json(newUser);
})
//Task 6 Update a user
app.put('/users/:id', (req, res) => {
  let userId = Number(req.params.id);
  const { name, email } = req.body;
  const user = users.find((user) => user.id === userId);
  if (!user) {
    return res.status(404).json({ error: `cannot find user!` })
  }
  if (!name && !email) {
    return res.status(400).json({ error: `name or email cannot be empty!` })
  }
  if (name) {
    user.name = name;
  }
  if (email) {
    user.email = email;
  }
  res.status(200).json(user);
})
//Task 7
app.delete('/users/:id', (req, res) => {
  const userId = Number(req.params.id);
  let index = users.findIndex((user)=> { user.id === userId})
  // if(!delId){
  //   return res.status(404).json({error: `must not be empty!`})
  // }
  // const user = users.find(() => user.id === delId );
  if(userId === -1 ){
  // if (users.indexOf(delId - 1)) {
    return res.status(404).json({ error: `user can not be found!` })
  }
  users.splice(index, 1);
  return res.status(204).send();
})
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
