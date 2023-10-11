const express = require('express');
const path = require('path');
const app = express();
const PORT = 3030;
const router = require('./routes/index');
const { sequelize } = require('./models/index');

app.use('/', express.static(__dirname + '/client'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log('Database connection succeeded!');
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
