import { useState } from "react";

import ImagePopup from "../popup/imagePopup/ImagePopup.jsx";
export default function Card(props) {
    const{name,link,isLiked}=props.card;
   const imageComponent = {
    children: <ImagePopup card={props.card} onClose={props.onClose} />
  };

    return (
    <li className="card">
        <img className="card__image" src={link} alt={name} 
        onClick={() => props.handleOpenPopup(imageComponent)}/>
        <button
          aria-label="Eliminar tarjeta"
          className="card__delete-button"
          type="button"
        ></button>
        <div className="card__description">
          <h2 className="card__title">{name}</h2>
          <button
            aria-label="Botón Me gusta"
            className="card__like-button"
            type="button"
          ></button>
        </div>
      </li>
  );
}