const fs = require('fs');

const userList = [];
let nextId = 0;

const getAll = () => {
    return userList;
}

const getOne = (id) => {
    return userList.find(x => x.id === id);
}

const create = (payload) => {
    nextId++;
    const { name, surname, email, username, password } = payload;
    const user = {
        id: nextId,
        name,
        surname,
        email,
        username,
        password
    };
    userList.push(user);
    return user;
}


const update = (payload) => {
    const { id, name, surname, email, username, password } = payload;
    const user = {
        id,
        name,
        surname,
        email,
        username,
        password
    }
    userList.find(x => {
        x.id == id;
        userList.splice((id - 1), 1, user);
    })
    return user;
}


const deleteUser = (payload) => {
    const { id } = payload;
    userList.find(x => {
        x.id === id;
        delete x;
    })
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteUser    
}