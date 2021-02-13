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
        jwt.verify(authToken, 'prenetics', (err, decoded) => {
            if (err) {
                console.log(err)
                throw err 
            }
            const id = (decoded as TokenInterface).data.id
            const user = users.find(user => user.id === id)
            req.body.user = user
            if (user) {
                next()
            } else {
                throw 'Unauthorized'
            }
        })
    } catch (err){
        res.status(401).send('Unauthorized')
        next(err)
    }
}