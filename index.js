const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World! I changed the content lets see build happens or not. Lat time failed let see now');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
