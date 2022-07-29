import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { save } from "../slices/mySlice"
import { useEffect } from "react";
function App(props) {

    const dispatch = useDispatch();
    const state = useSelector(state => state.myState);

    useEffect(() => {
        localStorage.setItem("spotifyState", JSON.stringify(state))
    }, [state])

    return (
        <div className="main">
            <h1>Hi</h1>
        </div>
    )
}

export default App;