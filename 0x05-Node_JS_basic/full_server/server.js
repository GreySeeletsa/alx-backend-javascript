// import routes from './routes';

import router from './routes';

const express = require('express');
const app = express();

app.use('/', router);

const port = 1245;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
