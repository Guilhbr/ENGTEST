import axios from 'axios'

export const getUser = async () => {
    const authUser = localStorage.getItem('ACCESS_TOKEN')
    return await axios.get('/user', {headers: {'Authorization': authUser}}).then(response => {
        return response.data
    }).catch(err => {
        throw err.response
    })
}

export const getGeneticData = async () => {
    const authUser = localStorage.getItem('ACCESS_TOKEN')
    return await axios.get('/user/geneticData', {headers: {'Authorization': authUser}}).then(response => {
        return response.data
    }).catch(err => {
        throw err.response
    })
}