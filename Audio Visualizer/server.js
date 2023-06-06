const express = require('express'); // updated // updated // updated // updated // updated
const path = require('path'); // updated // updated
const app = express(); // updated // updated // updated // updated // updated
const port = 3000; // updated // updated
// minor change added // updated // updated
// Serve static files from the current directory // updated // updated
app.use(express.static(path.join(__dirname, '/'))); // updated // updated // updated // updated
// minor change added // updated // updated
// Start the server // updated // updated // updated
app.listen(port, () => { // updated // updated // updated
  console.log(`Server is running at http://localhost:${port}`); // updated // updated // updated // updated
  console.log('Open this URL in your browser to see the visualizer.');
}); // updated // updated
// minor change added // updated
const express = require('express'); // updated // updated
const path = require('path'); // updated // updated // updated // updated
const app = express(); // updated // updated // updated
const port = 3000; // updated // updated // updated // updated // updated // updated
// minor change added // updated // updated
// Serve static files from the current directory // updated // updated
app.use(express.static(path.join(__dirname, '/'))); // updated // updated // updated
// minor change added // updated // updated
// Start the server
app.listen(port, () => { // updated // updated
  console.log(`Server is running at http://localhost:${port}`); // updated // updated
  console.log('Open this URL in your browser to see the visualizer.'); // updated // updated // updated // updated // updated // updated
}); // updated // updated // updated
// minor change added // updated