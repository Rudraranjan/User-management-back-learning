const express = require ('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middelware
app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: 'rudra', email: 'rudra@gmail.com'},
    {id: 2, name: 'rudra', email: 'rudra@gmail.com'},
    {id: 3, name: 'rudra', email: 'rudra@gmail.com'}
]
app.get('/', (req,res)=> {
    res.send('Users Management Server is running')
});

app.get('/users', (req,res)=>{
    res.send(users);
});

app.post('/users', (req,res) => {
    console.log(req.body);
    const newUser = req.body;
    newUser.id =users.length + 1;
    users.push(newUser);
    res.send (newUser);
})

app.listen(port, ()=>{
    console.log(`Server is runing on PORT: ${port}`)
})