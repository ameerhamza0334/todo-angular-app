const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/todo-angular-app'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', { root: 'dist/todo-angular-app/' }),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 1243, () => {
  console.log('server is running on port 8080')
});
