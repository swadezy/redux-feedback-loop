import { useHistory } from 'react-router-dom';

function Feeling() {

    const history = useHistory();

    const handleNext = () => {
        history.push('/1')
    }

    return (
        <form>
            <h3>How are you feeling today?</h3>
            <input type="number" />
            <button onClick={handleNext}>Next</button>
        </form>
    )
}

export default Feeling;