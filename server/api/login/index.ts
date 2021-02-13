import {NextFunction, Request, Response} from 'express'
import {users} from '../../data/mockData'
import jwt from 'jsonwebtoken'

export function login(req: Request, res: Response, next: NextFunction) {
    const {username, password} = req.body
    try {
        const user = users.find(user => user.username === username && user.password === password)
        if (user) {
            const token = jwt.sign({
                data: {id: user.id}, 
                exp: Math.floor(Date.now() / 1000) + (60 * 60), //1 hour
            }, 'prenetics')
            res.send({data: token, status: 200})
        } else {
            throw 'Wrong Username or Password'
        }
    } catch (err) {
        res.status(401).send('Wrong Username or Password')
        next(err)
    }
}