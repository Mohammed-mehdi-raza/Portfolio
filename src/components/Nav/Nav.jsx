import React,{useState} from "react";
import "./Nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {MdWorkOutline} from "react-icons/md";
import {BiMessageDetail} from "react-icons/bi";

function Nav(){

    const [activeNav,setActiveNav]=useState("#home")

    return(
        <nav>
            <a href="#home" onClick={()=>setActiveNav("#home")} className={activeNav==="#home"?'active':' '} ><AiOutlineHome/></a>
            <a href="#About" onClick={()=>setActiveNav("#About")} className={activeNav==="#About"?'active':' '}><AiOutlineUser/></a>
            <a href="#experience" onClick={()=>setActiveNav("#experience")} className={activeNav==="#experience"?'active':' '}><BiBook/></a>
            <a href="#portfolio" onClick={()=>setActiveNav("#portfolio")} className={activeNav==="#portfolio"?'active':' '}><MdWorkOutline/></a>
            <a href="#contact" onClick={()=>setActiveNav("#contact")} className={activeNav==="#contact"?'active':' '}><BiMessageDetail/></a>
        </nav>
    );
}

export default Nav;