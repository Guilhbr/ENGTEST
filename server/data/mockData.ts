type UserData = {
    id: number
    username: string
    password: string
    firstName: string
    lastName: string
    email: string
    dob: Date
    policy: string
    created: Date
    geneticId: number
}

type GeneticData = {
    id: number
    covid: boolean
    bloodType: string
    testLocation: string
    testDate: Date
    created: Date
}

export const users: UserData[] = [
    {
        id: 1,
        username: 'Joe',
        password: '1234',
        firstName: 'Joe',
        lastName: 'San',
        email: 'JoeS@test.com',
        dob: new Date(2000,11,3),
        policy: 'ASJU43SH',
        created: new Date(2021,1,20),
        geneticId: 1
    }
]

export const geneticDatas: GeneticData[] = [
    {
        id: 1,
        covid: true,
        bloodType: 'O+',
        testLocation: 'Ma On Shan',
        testDate: new Date(2021, 1, 20),
        created: new Date(2021,1,20)
    }
]