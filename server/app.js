var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var todos = [{
  id: 1,
  title: 'todo 1',
  completed: false
}, {
  id: 2,
  title: 'todo 2',
  completed: false
}, {
  id: 3,
  title: 'todo 3',
  completed: true
}];

// body parser
app.use(bodyParser());


// static files
app.use(express.static(path.join(__dirname, '../client')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));

// apis
app.get('/api/todos', function (req, res) {
  res.json(todos)
});

app.delete('/api/todos/:id', function (req, res) {
  var id = parseInt(req.params.id, 10);

  var foundTodo = todos.findIndex(function (todo) {
    return todo.id === id
  });

  if (foundTodo > -1) {
    todos.splice(foundTodo, 1);
  }

  res.send();
});

app.post('/api/todos', function (req, res) {
  if (!req.body.title) {
    return res.status(400).send();
  }

  var todo = {
    id: todos[todos.length - 1].id + 1,
    title: req.body.title,
    completed: req.body.completed || false
  }

  todos.push(todo);
  res.json(todo);
});



app.get('/', function (req, res) {
  res.sendfile('./client/index.html');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});