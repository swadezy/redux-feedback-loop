import { useHistory } from 'react-router-dom';

function Header() {

    const history = useHistory();

    const routeAdmin = () => {
        history.push('/admin')
    }

    return (
        <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <button onClick={routeAdmin}>Admin</button>
        </header>
    )
}

export default Header;