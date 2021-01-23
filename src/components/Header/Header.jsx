import { useHistory } from 'react-router-dom';

function Header() {

    const history = useHistory();

    const routeHome = () => {
        history.push('/')
    }

    const routeAdmin = () => {
        history.push('/admin')
    }

    return (
        <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <button onClick={routeHome}>Home</button>
            <button onClick={routeAdmin}>Admin</button>
        </header>
    )
}

export default Header;