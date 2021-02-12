import { isExpressionStatement } from "typescript";
import express, {Request, Response} from 'express'
import {users, geneticDatas} from '../../data/mockData'
const router = express.Router()

router.post('/', (req: Request, res: Response) => {
    const { username } = req.body
    const user = users.find(user => user.username === username)
    res.send(user)
})

router.post('/geneticData', (req: Request, res: Response) => {
    const { id } = req.body
    const geneticData = geneticDatas.find(data => data.id === id)
    res.send(geneticData)
}) 

export default router