import React from "react"
import Navbar from "./component/Navbar"
import Card from "./component/Card"
import Data from "./Data"
import './App.css';
export default function App (){
     const dataElement=Data.map(items=>{
      console.log(items);
        return (
            <Card
            key={items.id}
            item={items}
            />
        )
    })
    return (
      <div>
      <Navbar />
      {dataElement}
      </div>
    )
}