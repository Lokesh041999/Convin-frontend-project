import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./home.module.css";
import PropTypes from "prop-types";

const User = () => {

    let [content, setContent] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/users")
            .then((res) => {
                setContent(res.data)
            })

    }, [])

    let deleteData = (id) => {
        axios.delete(`http://localhost:3000/users/${id}`)
        window.location.assign("/user")
    }
    return (
        <div id={style.userPage}>
            {content.map((x) => {
                return (
                    <div id={style.card}>
                        <table>
                            <tr>
                                <td><h4>ID</h4></td>
                                <td>:{x.id}</td>
                            </tr>
                            <tr>
                                <td><h4>Name</h4></td>
                                <td>:{x.name}</td>
                            </tr>

                            <tr>
                                <td><h4>Video/mp3 Link</h4></td>
                                <td>:<Link to={`${x.item}`} style={{ textDecoration: 'none', color: 'white' }}>{x.item}</Link></td>
                            </tr>
                            <tr>
                                <td><button><Link to={`/play/${x.item}`} style={{ textDecoration: 'none', color: 'black' }}>Play</Link></button></td>
                                <td><button><Link to={`/edit/${x.id}`} style={{ textDecoration: 'none', color: 'black' }}>Edit</Link></button></td>
                                <td><button onClick={() => { deleteData(x.id) }}>Delete</button></td>
                            </tr>
                        </table>
                 


                    </div>

                )
            })}



        </div>

    )
}
User.propTypes = {
    x: PropTypes.string.isRequired
};
export default User