import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Admin() {

    const dispatch = useDispatch();

    useEffect(() => {
        getFeedback();
    }, []);

    const allFeedback = useSelector(store => store.allFeedbackReducer);
    console.log(allFeedback);

    const getFeedback = () => {
        axios.get('/feedback')
            .then((response) => {
                const action = {
                    type: 'GET_FEEDBACK',
                    payload: response.data
                }
                dispatch(action);
            }).catch((error) => {
                console.error(error);
            })
    }

    const handleDelete = (id) => {
        console.log('in handleDelete with id', id);
        axios.delete(`/feedback/${id}`)
            .then((response) => {
                getFeedback();
            }).catch((error) => {
                console.error(error);
            })
    }

    return (
        <div>
            <h3>Admin Page</h3>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allFeedback.map((feedback) => (
                        <tr key={feedback.id}>
                            <td>{feedback.feeling}</td>
                            <td>{feedback.understanding}</td>
                            <td>{feedback.support}</td>
                            <td>{feedback.comments}</td>
                            <td><button onClick={() => handleDelete(feedback.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <p>{allFeedback[0].feeling}</p> */}
        </div>
    )
}

export default Admin;