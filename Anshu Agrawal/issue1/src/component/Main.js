import React from "react"

export default function Main (){
    return(
        <div className="card--2">
        <div className="card--2-intro">
        <h2>Laura Smith</h2>
        <h6>Frontend developer</h6>
        </div>
        <div className="card--2-button">
        <button className="button1"><img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" /><h4>Email</h4></button>
        <button className="button2"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" /><h4>Linkedin</h4></button>
        </div>
        <main className="card--2-main">
        <div className="card--2-about">
        <h1>About</h1>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
         <div className="card--2-about">
        <h1>Interests</h1>
        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
        </main>
        </div>
    )
}