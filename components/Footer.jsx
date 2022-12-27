import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';


const timeNow = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="footer-container">
      <p>{timeNow} @Loja de Baterias - Todos os direitos reservados</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer