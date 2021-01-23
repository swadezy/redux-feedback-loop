import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support() {

    const [support, setSupport] = useState('');
    const [isSecret, setIsSecret] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = () => {
        if (support > 0 && support < 6) {
            const action = {
                type: 'SET_SUPPORT',
                payload: support
            };
            dispatch(action);
            history.push('/3');
        } else {
            setSupport('');
            setIsSecret(true);
        }
    }

    const handlePrevious = () => {
        history.push('/1');
    }

    return (
        <div>
            <h3>How well are you being supported?</h3>
            {isSecret ? <h5>Please enter a value between 1 and 5</h5> : <h5></h5>}
            <button onClick={handlePrevious}>Back</button>
            <input
                required
                placeholder="..."
                type="number"
                value={support}
                onChange={(event) => setSupport(event.target.value)}
            />
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default Support;