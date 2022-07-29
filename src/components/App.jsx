import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { save } from "../slices/mySlice"
function App(props){

const dispatch = useDispatch();
const state = useSelector(state => state.myState)

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