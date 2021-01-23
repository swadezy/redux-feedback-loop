import { useHistory } from 'react-router-dom';

function Support() {

    const history = useHistory();

    const handleNext = () => {
        history.push('/3')
    }

    return (
        <form>
            <h3>How well are you being supported?</h3>
            <input type="number" />
            <button onClick={handleNext}>Next</button>
        </form>
    )
}

export default Support;