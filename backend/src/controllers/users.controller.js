const userService = require('./../services/users.service');

const getAll = (req, res) => {
    const file = userService.getAll();
    if(!file) res.sendStatus(404);
    res.send(file);
}

const getOne = (req, res) => {
    const user = userService.getOne(req.params.id);
    if(!user) res.sendStatus(404);
    res.send(user);
}

const create = (req, res) => {
    const user = userService.create(req.body);
    res.send(user);
}

const update = (req, res) => {
    const user = userService.update(req.body);
    res.send(user);
}

const deleteUser = (req, res) => {
    const user = userService.deleteUser(req.params.id);
    res.send(user);
}

module.exports = { getAll, getOne, create, update, deleteUser }