const express = require('express')
const app = express()
const port = 4000;
const DELAY = 0;
const multer = require('multer');

var cors = require('cors');
app.use(cors())
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 

const tasks = [
  {
    id: 1,
    text: 'a first task',
    done: false,
  },
  {
    id: 2,
    text: 'write code',
    done: true,
  },
  {
    id: 3,
    text: 'learn react',
    done: true,
  },
  {
    id: 4,
    text: 'fix code',
    done: false,
  },
];

app.post('/tasks', multer().none(), (req, res) => {
  console.log('POST /tasks');
  console.log(req.body);
  tasks.push({
    id: Math.max(...tasks.map(t => t.id)) + 1,
    text: req.body.title,
    done: req.body.done,
  });
  res.sendStatus(200);
});

app.get('/tasks', (req, res) => {
  console.log('/tasks');
  setTimeout(() => {
    res.send(tasks.map(t => ({
      id: t.id,
      text: t.text,
    })))  
  }, 0);
})

app.get('/tasks/:id', (req, res) => {
  console.log('/tasks/:id');
  setTimeout(() => {
    const t = tasks.find(t => String(t.id) === String(req.params.id));
    res.send(t);  
  }, 4000);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})