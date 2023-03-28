import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homecrud from "./Component/Homecrud"
import Createuser from "./Component/Createuser"
import Edituser from "./Component/Edituser"
import User from "./Component/User"
import Play from "./Component/Play"

 
const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Homecrud/>
            <Routes>
                <Route element={<Createuser/>} path="/"/>
                 <Route element={<Play/>} path="/play"/> 
                <Route element={<User/>} path="/user"/>
                <Route element={<Edituser/>} path="/edit/:index"/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;