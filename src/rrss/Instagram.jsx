import React from 'react';
import './Instagram.css';
import Ig from "../assets/ig.png";


const Instagram = () => {

  return (
    <div title="¿Necesitas ayuda?">
        <a href="https://www.instagram.com/soyagustinolivera/?igshid=MzRlODBiNWFlZA%3D%3D">
        <img className="btn-instagram" target="_blank" src={Ig} width="82" height="82" alt="Instagram" />
        </a>
    </div>
  )
}

export default Instagram;