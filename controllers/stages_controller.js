const stages = require('express').Router()
const db = require('../models')
const { Stage } = db
const { Op } = require('sequelize')
const bands = require('./bands_controller')

//FIND ALL STAGES(index)
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll()
        res.status(200).json(foundStages)
    } catch (error){
        res.status(500).json(error)
    }
})
//Find one stage (show route)
stages.get('/:id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({ 
            where: { stage_id: req.params.id }
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})
//Create a Stage(post)
stages.post('/', async (req, res) => {
    try{
        const newStage = await Stage.create(req.body)
        res.status(200).json({ 
            message: 'Successfully inserted a new band',
            data: newStage
        })
    }   catch (err) {
            res.status(500).json(err)
    }
})
//Update a Stage
stages.put('/:id', async (req, res) => {
    try{
        const updatedStages = await Stage.update(req.body, { 
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({ 
            message: `Successfully updated ${updatedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
//Delete a stage
stages.delete('/:id', async (req, res) => {
    try{
        const deletedStages = await Stage.destroy({
            where: { 
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
//EXPORT 
module.exports = stages