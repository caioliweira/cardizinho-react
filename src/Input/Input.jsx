import React from "react";
import { useState } from "react";
import './Input.scss'

const BtnSelect = ({number, bgColor}) =>{
return (<>
<button className="btn" style={{backgroundColor:bgColor}}>{number}</button>
</>)
}

export default BtnSelect