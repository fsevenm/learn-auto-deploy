const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors({
    origin: '*',
}))

app.get('/api/events', (request, response) => {
    const events = [{
            id: 'event-1',
            title: 'ReactJS Intro'
        },
        {
            id: 'event-2',
            title: 'Functional Programming'
        }
    ]

    response.json({
        events
    })
});

module.exports = app;