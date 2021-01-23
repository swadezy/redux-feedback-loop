const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.post('/', (req, res) => {
    const fullFeedback = req.body;
    console.log('in post, received', fullFeedback);
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`
    pool.query(queryText, [fullFeedback.feeling, fullFeedback.understanding, fullFeedback.support, fullFeedback.comments])
        .then((result) => {
            console.log('added to db');
            res.sendStatus(201);
        }).catch((error) => {
            console.log('received error', error);
            res.sendStatus(500);
        })
})

module.exports = router;