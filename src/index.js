// src/index.js

const express = require('express');
const app = express();

app.use('/api/v1/posts', require('./routes/posts.routes'));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
