import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feeling() {

    const [feeling, setFeeling] = useState('');
    const [isSecret, setIsSecret] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = () => {
        if (feeling > 0 && feeling < 6) {
            const action = {
                type: 'SET_FEELING',
                payload: feeling
            };
            dispatch(action);
            history.push('/1');
        } else {
            setFeeling('');
            setIsSecret(true);
        }
    }

    return (
        <div>
            <h3>How are you feeling today?</h3>
            {isSecret ? <h5>Please enter a value between 1 and 5</h5> : <h5></h5>}
            <input
                required
                placeholder="..."
                type="number"
                value={feeling}
                onChange={(event) => setFeeling(event.target.value)}
            />
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default Feeling;