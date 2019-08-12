const express = require('express');
const knex = require('knex');

const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cars = await db('cars');

        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({message: 'could not find data', error: error});
    }
})

router.post('/', async (req, res) => {
    try {
        const body = req.body
        const addCar = await db.select('*').from('cars').insert(body);
        console.log(req.body)
        if (addCar) {
            res.status(201).json(addCar);
        } else {
            res.status(404).json({message: 'car was not added.'})
        }
    } catch (error) {
        res.status(500).json({message: 'could not add car to database', error: error});
    }
})

module.exports = router;