'use strict';

const express = require('express');
const { item } = require('../models/index');
const itemRoutes = express.Router();
// const permissions = require('../middleware/acl.middleware');
// itemRoutes.delete('/items/:id', permissions('delete'), deleteItemsHandler); 
itemRoutes.get('/items', getItemsHandler);
itemRoutes.get('/items/:id', getItemsHandler);
itemRoutes.post('/items', postItemsHandler);
itemRoutes.put('/items/:id', putItemsHandler);
itemRoutes.delete('/items/:id', deleteItemsHandler);

async function getItemsHandler(req, res) {
    let id = req.params.id;
    if (id) {
        let response = await item.findOne({ where: { id } });
        res.status(200).json(response);
    } else {
        let response = await item.findAll({});
        res.status(200).json(response);
    }
    
}

async function postItemsHandler(req, res) {
    let newItem = req.body;
    let newRecord = await item.create(newItem);
    res.status(201).json(newRecord);
}


async function putItemsHandler(req, res) {
    let id = req.params.id;
    let updateData = req.body;
    await item.findOne({ where: { id } }).then( async (record) => {
        let updatedRecord = await record.update(updateData);
        res.status(201).json(updatedRecord);
    });
}

async function deleteItemsHandler(req, res) {
    let id = req.params.id;
    let deletedRecord = await item.destroy({ where: { id } });
    res.status(204).json(`deleted ${deletedRecord} item -> ${id}`);
}

module.exports = itemRoutes;

/*
user: acc1
token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFjYzEiLCJpYXQiOjE2Mzk1Nzg4Njl9.8_Ou8jbTZkQJYhwxLsQq_ZP5tIqkgUFlkBBGgGyWl6c
*/