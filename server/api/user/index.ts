import { isExpressionStatement } from "typescript";
import express, {Request, Response} from 'express'
import {geneticDatas} from '../../data/mockData'
const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    const { user } = req.body
    const sensitiveUser = {
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        dob: user.dob,
        policy: user.policy,
    }
    res.send(sensitiveUser)
})

router.get('/geneticData', (req: Request, res: Response) => {
    const { user } = req.body
    const geneticData = geneticDatas.find(data => data.id === user.geneticId)
    if (geneticData) {
        const sensitiveData = {
            id: geneticData.id,
            covid: geneticData.covid,
            bloodType: geneticData.bloodType,
            testLocation: geneticData.testLocation,
            testDate: geneticData.testDate
        }
        res.send(sensitiveData)
    } else {
        res.status(404).send('No Genetic Data Found')
    }
}) 

export default router