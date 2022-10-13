import React from "react"
import Header from "./component/Header"
import Main from "./component/Main"
import Footer from "./component/Footer"
import "./App.css";
export default function App(){
  return (
      <div>
        <div className="card">
        
         <Header />
         <Main />
         <Footer />
        </div>
        </div>
  )
}