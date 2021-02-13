import {Request, Response} from 'express'
import {users} from '../../data/mockData'
import jwt from 'jsonwebtoken'

export function login(req: Request, res: Response) {
    const {username, password} = req.body
    const user = users.find(user => user.username === username && user.password === password)
    if (user) {
        const token = jwt.sign({
            data: {id: user.id}, 
            exp: Math.floor(Date.now() / 1000) + (60 * 60), //1 hour
        }, 'prenetics')
        res.send({data: token, status: 200})
    } else {
        res.status(401).send({data: 'Wrong Username or Password', satus: 401})
    }
}