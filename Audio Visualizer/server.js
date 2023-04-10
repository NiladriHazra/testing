const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname, '/')));

// Start the server // updated
app.listen(port, () => { // updated // updated
  console.log(`Server is running at http://localhost:${port}`);
  console.log('Open this URL in your browser to see the visualizer.');
}); // updated
// minor change added
const express = require('express');
const path = require('path'); // updated
const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname, '/')));

// Start the server
app.listen(port, () => { // updated // updated
  console.log(`Server is running at http://localhost:${port}`);
  console.log('Open this URL in your browser to see the visualizer.'); // updated // updated
}); // updated
// minor change added