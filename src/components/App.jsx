import { useSelector, useDispatch } from 'react-redux';
import { save } from "../slices/mySlice"
function App(props){

const dispatch = useDispatch();
const state = useSelector(state => state.myState)

    return(
        <div className="main">
            <h1>Hi</h1>
        </div>
    )
}

export default App;