import {Request, Response} from 'express'
const users = [
    {
        username: 'Joe',
        password: '1234'
    }
]

export function login(req: Request, res: Response) {
    const {username, password} = req.body
    if (users.find(user => user.username === username && user.password === password)) {
        res.send(username)
    } else {
        res.status(401).send('Wrong Username or Password')
    }
}