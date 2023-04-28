const express = require('express'); // updated // updated
const path = require('path');
const app = express(); // updated // updated // updated
const port = 3000;
// minor change added // updated
// Serve static files from the current directory
app.use(express.static(path.join(__dirname, '/'))); // updated
// minor change added
// Start the server // updated // updated
app.listen(port, () => { // updated // updated
  console.log(`Server is running at http://localhost:${port}`); // updated // updated // updated
  console.log('Open this URL in your browser to see the visualizer.');
}); // updated // updated
// minor change added // updated
const express = require('express');
const path = require('path'); // updated
const app = express(); // updated
const port = 3000;
// minor change added
// Serve static files from the current directory
app.use(express.static(path.join(__dirname, '/'))); // updated // updated

// Start the server
app.listen(port, () => { // updated // updated
  console.log(`Server is running at http://localhost:${port}`);
  console.log('Open this URL in your browser to see the visualizer.'); // updated // updated // updated
}); // updated // updated
// minor change added