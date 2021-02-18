import React from 'react'
import './Header.css'


function Header() {

    return(
        <div 
            className="header"
            style={{
            textAlign:"center",
            height:"200px",
            width:"90%",
            margin:"auto",
            textTransform:"uppercase",
            backgroundColor:"whitesmoke"
        }}>
            <h1>Meme Generator</h1>
            <img src="https://p7.hiclipart.com/preview/59/826/480/rage-comic-internet-troll-internet-meme-cartoon-comics-troll-face-meme-png.jpg" alt=""/>
        </div>
    );
}

export default Header
