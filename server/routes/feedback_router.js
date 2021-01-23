const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
    console.log('in get');
    const queryText = `SELECT * FROM "feedback" ORDER BY "id" ASC;`;
    pool.query(queryText)
        .then((result) => {
            console.log('received', result.rows);
            res.send(result.rows)
        }).catch((error) => {
            console.log('received error', error);
            res.sendStatus(500)
        })
})

router.post('/', (req, res) => {
    const fullFeedback = req.body;
    console.log('in post, received', fullFeedback);
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [fullFeedback.feeling, fullFeedback.understanding, fullFeedback.support, fullFeedback.comments])
        .then((result) => {
            console.log('added to db');
            res.sendStatus(201);
        }).catch((error) => {
            console.log('received error', error);
            res.sendStatus(500);
        })
})

router.delete('/:id', (req, res) => {
    console.log('in delete with id', req.params.id);
    const queryText = `DELETE FROM "feedback" WHERE id = $1;`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            console.log('deleted from db');
            res.sendStatus(204);
        }).catch((error) => {
            console.log('received error', error);
            res.sendStatus(500)
        })
})

router.put('/:id', (req, res) => {
    console.log('in put with id', req.params.id);
    const queryText = `UPDATE "feedback" SET "flagged" = NOT "flagged" WHERE id = $1;`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            console.log('updated flag status');
            res.sendStatus(204);
        }).catch((error) => {
            console.log('received error', error);
            res.sendStatus(500);
        })
})

module.exports = router;