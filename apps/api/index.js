const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors({
    origin: '*',
}))

app.get('/api/events', (request, response) => {
    const events = [
        {id: 'event-1', title: 'ReactJS Intro'},
        {id: 'event-2', title: 'Functional Programming'}
    ]

    response.json({
        events
    })
});

const PORT  = 8080;

app.listen(PORT, () => {
    console.log(`Api running on port ${PORT}`);
})

