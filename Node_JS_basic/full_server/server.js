const express = require('express');
const routes = require('./routes');

const app = express();

app.use(routes);
app.listen(1245, () => {
  console.log('Server is running');
});

export default app;
