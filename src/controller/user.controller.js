import fs from 'fs'
import path, { dirname } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url))

const userFilePath = path.join(__dirname, '../database/users.json')

export const findUsersController = () => {
    const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'))
    return users
}

export const getUserController =  (id) => {
    const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'))
    const user = users.find(user => user.id === id)
    return user
}

export const createUserController =  (data) => {

     if (data.name === 'Javier') throw new Error('No están permitidos los Javier. Lo siento Javier Lamarque.')
    
     let users = JSON.parse(fs.readFileSync(userFilePath, 'utf8'))
     const userCreated = {
        id: users[users.length -1].id + 1,
        name: data.name
     }

    users.push(userCreated)
    const newListUsers = [...users]

    fs.writeFileSync(userFilePath, JSON.stringify(newListUsers))

    return userCreated 
}
