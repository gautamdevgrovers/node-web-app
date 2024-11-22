const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send(`
        <h1>Node server is running successfully.</h1>
        <img src="/image.png" alt="Sample Image" style="max-width: 100%; height: auto;">
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
