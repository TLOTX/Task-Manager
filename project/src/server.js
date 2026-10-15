const express = require('express');

const app = express();
const PORT = 4001;
const requestLogger = require('./middleware/loggerMiddleware.js')
const errorHandler = require('./middleware/errorMiddleware.js')
const tasksRoute = require('./routes/tasksRoute.js');


app.use(express.json());
app.use(requestLogger)

app.get('/', (req, res) => {
    res.json({ message: 'I am a backend engineer' });
});


app.use('/api/tasks', tasksRoute);

app.listen(PORT, () => {
    console.log(`Task manager is running on port ${PORT}`);
});