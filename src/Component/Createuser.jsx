import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import style from "./home.module.css";
const Createuser=()=>{

    let [name,setName]=useState("")
 
    let [item,setItem]=useState("")
    let navigator=useNavigate("")

    let nameData=(e)=>{
        setName(e.target.value)
    }
    
    let itemData=(e)=>{
        setItem(e.target.value)
    }
    let formHandle=(e)=>{
        e.preventDefault();
        let load={name,item}
        axios.post(" http://localhost:3000/users",load)
        .then(()=>{
            console.log("Data has been updated")
        })
        .catch(()=>{
            console.log("Something is fishy")
        })
        navigator("/user")
    }
    return(
        <div id={style.myForm}>
            <form action="">
                <tr>
                    <th colSpan="2"><h4>User Details</h4></th>
                </tr>
                <tr>
                    <td><label htmlFor="">Name</label></td>
                    <td>:<input type="text" value={name} onChange={nameData}/></td>
                </tr>
               
                <tr>
                    <td><label htmlFor="">Video/mp3 Link</label></td>
                    <td>:<input type="text" value={item} onChange={itemData} required/></td>
                </tr>
                <tr>
                    <th colSpan="2"><button onClick={formHandle}>Submit</button></th>
                </tr>
            </form>
        </div>
    )
}
export default Createuser;