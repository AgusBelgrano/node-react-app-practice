const userService = require('./../services/users.service');

const getAll = (req, res) => {
    res.send(userService.getAll);
}

const getOne = (req, res) => {
    const user = userService.getOne(req.params.id);
    if(!user) {
        res.sendStatus(400);
    }
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
    const user = userService.deleteUser(req.body);
    res.send(user);
}

module.exports = { getAll, getOne, create, update, deleteUser }