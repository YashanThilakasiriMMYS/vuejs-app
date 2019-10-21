const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware for dependencies
app.use(bodyParser.json());
app.use(cors());

//setting up routes
const posts = require('./routes/api/posts');

//any routes goes towards this path will goes to posts 
app.use('/api/posts', posts);

//variable for port
const port = process.env.PORT || 5000;

//telling app to use the port
app.listen(port, () => console.log('Server started on port ' +port+ ' ! ' ));

