import axios from 'axios'

// export const login = async (username: string, password: string) => {
//     return await axios.post('/login', { username, password }).then(message => {
//         return Promise.resolve().then(function() {
//             localStorage.setItem('ACCESS_TOKEN', message.data.data)
//         }).then(() => {
//             return message.data
//         })
//     }).catch(err => {
//         return 'Wrong Username or Password'
//     })
// }

type loginResponse = {
    data: string
    status: number
}

export const login = (username: string, password: string): Promise<loginResponse> => {
    return axios.post('/login', { username, password }).then(message => {
        localStorage.setItem('ACCESS_TOKEN', message.data.data)
        return message.data
    }).catch(err => {
        return {data: 'Wrong Username or Password', status: 401}
    })
    // .then(message => {
    //     return Promise.resolve().then(function() {
    //         localStorage.setItem('ACCESS_TOKEN', message.data.data)
    //     }).then(() => {
    //         return message.data.data
    //     })
    // }).catch(err => {
    //     return 'Wrong Username or Password'
    // })
}