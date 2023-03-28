import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import style from "./home.module.css";
import { useEffect } from "react";

const Edituser=()=>{

    let [name,setName]=useState("")
    let [item,setItem]=useState("")
    let navigator=useNavigate("")
    let {index}=useParams("")

    useEffect(()=>{
        axios.get(` http://localhost:3000/users/${index}`)
        .then((resp)=>{
            setName(resp.data.name)
          
            setItem(resp.data.item)
        })
    },[index])
    let nameData=(e)=>{
        setName(e.target.value)
    }
   
    let itemData=(e)=>{
        setItem(e.target.value)
    }
    let formHandle=(e)=>{
        e.preventDefault();
        let load={name,item}
        axios.put(` http://localhost:3000/users/${index}`,load)
        .then((e)=>{
            console.log("Data has been updated")
        })
        navigator("/user")
    }
    return(
        <div id={style.myForm}>
            <form action="">
                <tr>
                    <td colSpan="2"><h4>User Details</h4></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Name</label></td>
                    <td>:<input type="text" value={name} onChange={nameData}/></td>
                </tr>
               
                <tr>
                    <td><label htmlFor="">Video/mp3 Link</label></td>
                    <td>:<input type="text" value={item} onChange={itemData}/></td>
                </tr>
                <tr>
                    <th colSpan="2"><button onClick={formHandle}>Submit</button></th>
                </tr>
            </form>
        </div>
    )
}
export default Edituser;