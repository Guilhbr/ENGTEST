import {Redirect} from 'react-router-dom'

function Home () {
    const isAuth = !!localStorage.getItem('ACCESS_TOKEN')
    return (
        <Redirect to={{ pathname: isAuth ? '/profile' : '/login' }} />
    )
}

export default Home