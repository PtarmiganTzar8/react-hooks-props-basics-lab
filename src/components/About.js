import React from "react";
import Links from "./Links";

function About(props) {
  // console.log(props)
  // function bioSeen() {
  //   if (props.bio && props.bio.length > 0) {
  //     return <p>{props.bio}</p>
  //   } else {
  //     return null
  //   }
  // }


  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio.length > 0 ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

export default About;
