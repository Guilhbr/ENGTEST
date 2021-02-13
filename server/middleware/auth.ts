import {NextFunction, Request, Response} from 'express'
import {users} from '../data/mockData'
import jwt from 'jsonwebtoken'

interface TokenInterface {
    data: {
        id: number
    }
    exp: number
    iat: number
}

export const authUser = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authToken = req.headers.authorization || ''
        const decodedToken = jwt.verify(authToken, 'prenetics')
        const id = (decodedToken as TokenInterface).data.id
        const user = users.find(user => user.id === id)
        req.body.user = user
        if (user) {
            next()
        } else {
            throw 'Invalid ID'
        }
    } catch {
        res.status(401).send({data: 'Unauthorized', status: 401})
    }
}