// crud.js
const { Sequelize } = require('sequelize');

let sequelize;

// Function to initialize Sequelize and establish database connection
function initDatabase(db,username,pwd,host,port,dialect,forceSync) {
    sequelize = new Sequelize(db,username,pwd,{
        host: host,
        port:port,
        dialect: dialect
    });

    // Test the database connection
    sequelize.authenticate()
        .then(() => {
            console.log('Connection to database has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
    });

    // Sync the models with the database
    sequelize.sync({ force: forceSync });

    return sequelize;
}

// Function to define models
function defineModel(sequelize, modelName, attributes) {
    sequelize.define(modelName, attributes);
}

// Function to get all records of a model
async function getAll(req, res) {
    const modelName = req.params.modelName;
    const Model = sequelize.models[modelName];
    if (!Model) {
        return res.status(404).json({ error: 'Model not found' });
    }
    const data = await Model.findAll();
    res.json(data);
}

// Function to get a single record by ID
async function getById(req, res) {
    const modelName = req.params.modelName;
    const Model = sequelize.models[modelName];
    if (!Model) {
        return res.status(404).json({ error: 'Model not found' });
    }
    const id = req.params.id;
    const data = await Model.findByPk(id);
    if (!data) {
        return res.status(404).json({ error: 'Record not found' });
    }
    res.json(data);
}

// Function to create a new record
async function create(req, res) {
    const modelName = req.params.modelName;
    const Model = sequelize.models[modelName];
    if (!Model) {
        return res.status(404).json({ error: 'Model not found' });
    }
    try {
        const newData = await Model.create(req.body);
        res.json(newData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Function to update a record
async function update(req, res) {
    const modelName = req.params.modelName;
    const Model = sequelize.models[modelName];
    if (!Model) {
        return res.status(404).json({ error: 'Model not found' });
    }
    const id = req.params.id;
    const existingData = await Model.findByPk(id);
    if (!existingData) {
        return res.status(404).json({ error: 'Record not found' });
    }
    await existingData.update(req.body);
    res.json(existingData);
}

// Function to delete a record
async function remove(req, res) {
    const modelName = req.params.modelName;
    const Model = sequelize.models[modelName];
    if (!Model) {
        return res.status(404).json({ error: 'Model not found' });
    }
    const id = req.params.id;
    const existingData = await Model.findByPk(id);
    if (!existingData) {
        return res.status(404).json({ error: 'Record not found' });
    }
    await existingData.destroy();
    res.status(204).send();
}

module.exports = { initDatabase, defineModel, getAll, getById, create, update, remove };
