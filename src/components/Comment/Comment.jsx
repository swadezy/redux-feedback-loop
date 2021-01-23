import { useHistory } from 'react-router-dom';

function Comment() {

    const history = useHistory();

    const handleNext = () => {
        history.push('/4')
    }

    return (
        <form>
            <h3>Any comments you want to leave?</h3>
            <input type="text" />
            <button onClick={handleNext}>Next</button>
        </form>
    )
}

export default Comment;