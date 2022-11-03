const fs = require('fs');

const userList = [];
let nextId = 0;

const getAll = () => {
    let content = fs.readFileSync('users.json', 'utf-8');
    return content;
}

const getOne = (id) => {
    return userList.find(x => x.id === id);
}

const create = (payload) => {
    nextId++;
    const { firstName, lastName, email, password } = payload;
    const user = {
        id: nextId,
        firstName,
        lastName,
        email,
        password
    };
    userList.push(user);
    fs.writeFileSync('users.json', JSON.stringify(userList));
    return user;
}


const update = (payload) => {
    const { id, firstName, lastName, email, password } = payload;
    const user = {
        id,
        firstName,
        lastName,
        email,
        password
    }
    const userFind = userList.find(x => x.id === user.id);
    userList.splice((id - 1), 1, userFind)
    return user;
}


const deleteUser = (id) => {
    const user = userList.find(x => x.id === id);
    delete user;
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteUser    
}