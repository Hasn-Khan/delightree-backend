const express = require('express');
const config=require('./config')
const routes = require('./routes');
const {connectToDB}=require('./db')



const app = express();


app.use(express.json());


connectToDB();


app.use('/', routes);


const PORT = config.port || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
