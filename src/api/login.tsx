import axios from 'axios'

export const login = async (username: string, password: string) => {
    return await axios.post('/login', { username, password }).then(message => {
        return Promise.resolve().then(function() {
            localStorage.setItem('ACCESS_TOKEN', message.data.data)
        }).then(() => {
            return message.data
        })
    }).catch(err => {
        return 'Wrong Username or Password'
    })
}