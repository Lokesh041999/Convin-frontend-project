import React, { useState,useEffect } from "react";
import YouTube from "react-youtube";
import axios from "axios";

var getYouTubeID = require("get-youtube-id");

export default function Play() {
  const [id, setId] = useState("");
 

  useEffect(() => {
    axios.get("http://localhost:3000/users")
        .then((res) => {
            setId(getYouTubeID(res.data.item))
        })

}, [])
  
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
     
      autoplay: 1
    }
  };
  return (
    <div className="Play">
      {id.map((x) => {  
        return (
            <div>
      
        <p onChange={x.id}/>
    
 
      <YouTube videoId={id} opts={opts} onReady={this._onReady} />
    </div>
  )})};
  </div>)
}