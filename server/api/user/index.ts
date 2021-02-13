import express, {NextFunction, Request, Response} from 'express'
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

router.get('/geneticData', (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body
    try {
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
            throw 'No Genetic Data Found'
        }
    } catch (err) {
        res.status(404).send('No Genetic Data Found')
        next(err)
    }
}) 

export default router