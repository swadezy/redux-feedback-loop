import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feeling() {

    const [feeling, setFeeling] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = () => {
        const action = {
            type: 'SET_FEELING',
            payload: feeling
        };
        dispatch(action);
        history.push('/1');
    }

    return (
        <form>
            <h3>How are you feeling today?</h3>
            <input
                placeholder="..."
                type="number"
                value={feeling}
                onChange={(event) => setFeeling(event.target.value)}
            />
            <button onClick={handleNext}>Next</button>
        </form>
    )
}

export default Feeling;