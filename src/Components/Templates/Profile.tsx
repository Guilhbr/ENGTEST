import React from 'react';
import DataEntry from '../Atoms/DataEntry'

type UserData = {
    id: number,
    firstName: string
    lastName: string
    email: string
    dob: string
    policy: string
    data: GeneticData
}

type GeneticData = {
    covid: boolean
    bloodType: string
    location: string
    date: string
}

function Profile() {
    let geneticData: GeneticData = {
        covid: true,
        bloodType: 'O+',
        location: 'Ma On Shan',
        date: '20/01/2021'
    }
    let user: UserData = {
        id: 1,
        firstName: 'Joe',
        lastName: 'San',
        email: 'JoeS@test.com',
        dob: '03/11/2000',
        policy: 'ASJU43SH',
        data: geneticData,
    }
  return (
    <div className="profileContainer">
        <div className="profileSection">
            <div className="profileTitle">Profile</div>
            <div>
                <DataEntry title={'Name'} result={`${user.firstName} ${user.lastName}`}></DataEntry>
                <DataEntry title={'Email'} result={user.email}></DataEntry>
                <DataEntry title={'Birthdate'} result={user.dob}></DataEntry>
                <DataEntry title={'Policy'} result={user.policy}></DataEntry>
            </div>
        </div>
        <div className="profileSection">
            <div className="profileTitle">Results</div>
            <div>
                <DataEntry title={'Covid-19'} result={user.data.covid ? 'Positive' : 'Negative'}></DataEntry>
                <DataEntry title={'Blood Type'} result={user.data.bloodType}></DataEntry>
                <DataEntry title={'Test Location'} result={user.data.location}></DataEntry>
                <DataEntry title={'Test Date'} result={user.data.date}></DataEntry>
            </div>
        </div>
    </div>
  );
}

export default Profile;
