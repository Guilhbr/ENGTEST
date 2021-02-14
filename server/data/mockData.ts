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
    updated: Date
    geneticId: number
}

type GeneticData = {
    id: number
    userId: number
    covid: boolean
    bloodType: string
    testLocation: string
    testDate: Date
    created: Date
    updated: Date
}

export const users: UserData[] = [
    {
        id: 1,
        username: 'Joe',
        password: 'hU3cAGNp63usOLtmkOf5sF0NaGWb4fllZN9AfWU+DfI=',
        firstName: 'Joe',
        lastName: 'San',
        email: 'JoeS@test.com',
        dob: new Date(2000,11,3),
        policy: 'ASJU43SH',
        created: new Date(2021,1,20),
        updated: new Date(2021,1,20),
        geneticId: 1
    }
]

export const geneticDatas: GeneticData[] = [
    {
        id: 1,
        userId: 1,
        covid: true,
        bloodType: 'O+',
        testLocation: 'Ma On Shan',
        testDate: new Date(2021, 1, 20),
        created: new Date(2021,1,20),
        updated: new Date(2021,1,20)
    }
]