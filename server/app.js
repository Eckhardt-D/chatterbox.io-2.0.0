const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.use(cors());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Connected');
})

io.on('connection', (socket) => {
  console.log('A user connected!')
})

const port = process.env.PORT || 1111
http.listen(port, () => console.log(`connected on port ${port}`));