const express = require('express');
const app = express();

// Эндпоинт helloWorld
app.get('/helloWorld', (req, res) => {
    res.send('Hello, World!');
});

// Запуск сервера на порту 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});