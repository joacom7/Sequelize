import express from "express";
import { findUsersController, getUserController, createUserController } from '../controller/user.controller.js'

export const userRouter = express.Router()

// GET localhost:3000/users/
userRouter.get('/',  (req, res) => {
    const user =  findUsersController()
    res.send(user)
})
// GET localhost:3000/users/1
userRouter.get('/:id', async (req, res) => {
    const userId  = Number(req.params.id) 
    const user = getUserController(userId)
    if (!user)res.send('No existe Usuario')
    res.send(user)
})

// POST localhost:3000/users/
userRouter.post('/', (req, res) => {
    const body =  req.body
    console.log(body)
    const user = createUserController(body)
    res.send(user)
})

//POST localhost:3000/users/login
userRouter.post('/login', (req, res) =>{
    const dataLogin = req.body
})

//POST localhost:3000/users/signin
userRouter.post('/signin', (req, res) =>{
    const dataLogin = req.body
})

//PUT localhost:3000/users/:id
userRouter.put('/:id', (req, res) =>{
    const userData = req.body
    //El controlador hace la actualizacion y me devuelve los datos Ej. const userUpdated = updateUser(userData)
    res.send(userUpdated)
})
