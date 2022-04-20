const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
    res.send('helooooooo worlddddddd from bd india  australia englamd')
})
const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '01788888888' },
    { id: 2, name: 'shabnoor', email: 'shabnoor@gmail.com', phone: '01788888888' },
    { id: 3, name: 'moushumi', email: 'moushumi@gmail.com', phone: '01788888888' },
    { id: 4, name: 'alia', email: 'alia@gmail.com', phone: '01788888888' },
    { id: 5, name: 'kareena', email: 'kareena@gmail.com', phone: '01788888888' },
    { id: 6, name: 'suchorita', email: 'suchorita@gmail.com', phone: '01788888888' },
]

app.get('/users', (req, res) => {
    //console.log('query', req.query);
    if (req.query.name) {
        const search = req.query.name.toLowerCase()
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)

    }
    else {
        res.send(users)
    }

})
app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.get('/user/:id', (req, res) => {
    // console.log(req.params.id);
    const id = req.params.id
    const user = users.find(u => u.id == id)
    res.send(user)
})

app.listen(port, () => {
    console.log('listening to porttttttt', port);
})  