import axios from 'axios'
const authUser = localStorage.getItem('ACCESS_TOKEN')

export const getUser = async () => {
    return await axios.get('/user', {headers: {'Authorization': authUser}}).then(response => {
        return response.data
    }).catch(err => {
        throw err
    })
}

export const getGeneticData = async () => {
    return await axios.get('/user/geneticData', {headers: {'Authorization': authUser}}).then(response => {
        return response.data
    }).catch(err => {
        throw err
    })
}