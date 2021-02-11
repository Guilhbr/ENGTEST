import {Redirect, RouteComponentProps, Route} from 'react-router-dom'

interface Props {
    Component: React.FC<RouteComponentProps>
    path: string;
}

const PrivateRoute = ({ Component, path }: Props): JSX.Element => {
    const isAuth =  !!localStorage.getItem('ACCESS_TOKEN')
    const message = 'Please log in to view this page'
    return (
        <Route
            path={path}
            render={(props: RouteComponentProps) => 
            isAuth ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: {
                            message,
                            requestedPath: path,
                        }
                    }}
                />
            )}
        />
    )
}

export default PrivateRoute