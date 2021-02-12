import axios from 'axios'

export const login = async (username: string, password: string) => {
    return await axios.post('/login', { username, password }).then(message => {
        return message.data
    }).catch(err => {
        return 'Wrong Username or Password'
    })
}