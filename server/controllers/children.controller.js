const Children = require("../models/children.model");

const createNewChildren = (req, res) => {
    Children.create(req.body)
        .then((newChildren) => {
            res.json({ newChildren });
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const getAllChildren = (req, res) => {
    Children.find()
        .then((allChildren) => {
            res.json(allChildren);
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};


const getChildren = (req, res)=>{
    Children.findOne({_id: req.params.id })
        .then((Children)=>{
            console.log(Children);
            res.json(Children);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
    };

const getOneChildren = (req, res) => {
    Children.findOne({ _id: req.params.id })
    .then((queriedChildren) => {
        res.json(queriedChildren);
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const updateChildren = (req, res) => {
    Children.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
    .then((updatedChildren) => {
        res.json({ updatedChildren });
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const deleteExistingUser = (req, res) => {
    Children.deleteOne({ _id: req.params.id })
    .then((deletedResponse) => {
        res.json({ deletedResponse });
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};



module.exports = {
    createNewChildren,
    getOneChildren,
    getChildren,
    getAllChildren,
    updateChildren,
    deleteExistingUser,
};