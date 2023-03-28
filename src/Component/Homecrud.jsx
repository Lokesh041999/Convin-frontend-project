import React from "react"
import { Link } from "react-router-dom";
import style from "./home.module.css";

const Homecrud=()=>{
    return(
        <section id={style.nav}>
            <Link to="/">Add Info</Link>
            <Link to="/user">Card</Link>
        </section>
    )
}
export default Homecrud;