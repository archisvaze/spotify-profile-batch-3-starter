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

    return(
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route element ={
            <div>
             <HeaderComponent/>
            <Routes>
            <Route/>
            <Route/>
            <Route/>
            <Route/>
            <Route/>  
            </Routes>
            </div>
            }/>
           
        </Routes>
    )
}

export default App;