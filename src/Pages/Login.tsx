import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Login () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    let history = useHistory()

    function changeUsername (e: React.ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value)
    }

    function changePassword (e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    function handleKeyDown (e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            e.preventDefault()
            login()
        }
    }

    function login() {
        if (username === 'Joe' && password === '1234') {
            localStorage.setItem('ACCESS_TOKEN', username)
            history.push('/profile')
        } else {
            setError('Wrong username or password')
        }
    }

    return (
        <div className="loginContainer">
            <div className="card">
                <div className="card-body">
                    <div className="mb-3">
                        <div className="loginTitle">Username</div>
                        <input type="text" className="form-control" value={username} 
                            onChange={changeUsername} onKeyDown={handleKeyDown} placeholder="e.g. Joe"></input>
                    </div>
                    <div className="mb-3">
                        <div className="loginTitle">Password</div>
                        <input type="text" className="form-control" value={password} 
                            onChange={changePassword} onKeyDown={handleKeyDown} placeholder="e.g. 1234"></input>
                    </div>
                    <button type="button" onClick={login} className="btn btn-primary">Login</button>
                    <div className="mb3">
                        <div className="loginError">{error}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;