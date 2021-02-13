import React, {useState, useEffect} from 'react';
import DataEntry from '../Components/DataEntry'
import {getGeneticData, getUser} from '../api/profile'
import {useHistory} from 'react-router-dom'

type UserData = {
    id: number
    username: string
    firstName: string
    lastName: string
    email: string
    dob: Date
    policy: string
    geneticId: number
}

type GeneticData = {
    id: number
    covid: boolean
    bloodType: string
    testLocation: string
    testDate: Date
}

const initData: GeneticData = {
    id: -1,
    covid: false,
    bloodType: '',
    testLocation: '',
    testDate: new Date()
}

let initUser: UserData = {
    id: -1,
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: new Date(),
    policy: '',
    geneticId: 1,
}

function Profile() {
    const [user, setUser] = useState(initUser)
    const [geneticData, setGeneticData] = useState(initData)

    useEffect(() => {
        getUser().then(userRes => {
            if (userRes.status === 401) {
                logout()
            } else {
                setUser(userRes)
                getGeneticData().then(dataRes => {
                    setGeneticData(dataRes)
                }).catch(err => {
                    console.log(err)
                })
            }
        }).catch(err => {
            console.log(err)
        })
    }, [])

    function logout() {
        localStorage.removeItem('ACCESS_TOKEN')
        history.push('./login')
    }

    const history = useHistory();
    return (
        <div className="profileContainer">
            <div className="profileHeader">
                {user.username && 
                    <div>Logged in as <span className="fw-bold">{user.username}</span></div>
                }
                <button type="button" onClick={logout} className="btn btn-secondary">Logout</button>
            </div>
            {user.id !== -1 &&
                <div className="profileSection">
                <div className="profileTitle">Profile</div>
                    <div>
                        <DataEntry title={'Name'} result={`${user.firstName} ${user.lastName}`}></DataEntry>
                        <DataEntry title={'Email'} result={user.email}></DataEntry>
                        <DataEntry title={'Birthdate'} result={user.dob.toString()}></DataEntry>
                        <DataEntry title={'Policy'} result={user.policy}></DataEntry>
                    </div> 
                </div> 
            }
            {geneticData.id !== -1 &&
                <div className="profileSection">
                    <div className="profileTitle">Results</div>
                    <div>
                        <DataEntry title={'Covid-19'} result={geneticData.covid ? 'Positive' : 'Negative'}></DataEntry>
                        <DataEntry title={'Blood Type'} result={geneticData.bloodType}></DataEntry>
                        <DataEntry title={'Test Location'} result={geneticData.testLocation}></DataEntry>
                        <DataEntry title={'Test Date'} result={geneticData.testDate.toString()}></DataEntry>
                    </div>
                </div>
            }
        </div>
    );
}

export default Profile;
