import axios from 'axios'

export const getUser = async (username: string) => {
    return await axios.post('/user', { username }).then(response => {
        return response.data
    }).catch(err => {
        console.log('error getting user data')
        return 'Could not find user data.'
    })
}

export const getGeneticData = async (id: number) => {
    return await axios.post('/user/geneticData', { id }).then(response => {
        return response.data
    }).catch(err => {
        console.log('error getting genetic data')
        return 'Could not find genetic data.'
    })
}