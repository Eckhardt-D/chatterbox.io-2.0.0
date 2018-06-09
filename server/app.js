const express = require('express');
const io = require('socket.io');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Connected');
})









const port = process.env.PORT || 1111
app.listen(port, () => console.log(`connected on port ${port}`));