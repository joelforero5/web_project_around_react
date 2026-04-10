import { useState } from "react";
import DeleteCard from "../popup/deleteCard/DeleteCard.jsx";
import ImagePopup from "../popup/imagePopup/ImagePopup.jsx";
export default function Card({handleOpenPopup,onClose,onCardLike,onCardDelete,card}) {
    const{name,link,isLiked}=card;
   const imageComponent = {
    children: <ImagePopup card={card} onClose={onClose} />
  };
  const deleteCard = {
    title: '¿Estás seguro?',
    children:<DeleteCard card={card}/>
  }
  const cardLikeButtonClassName = `card__like-button ${
  isLiked ? 'card__like-button_is-active' : ''
}`;


    return (
    <li className="card">
        <img className="card__image" src={link} alt={name} 
        onClick={() => handleOpenPopup(imageComponent)}/>
        <button
          aria-label="Eliminar tarjeta"
          className="card__delete-button"
          type="button"
          onClick={()=>handleOpenPopup(deleteCard)}
        ></button>
        <div className="card__description">
          <h2 className="card__title">{name}</h2>
          <button
            aria-label="Botón Me gusta"
            className={`${cardLikeButtonClassName}`}
            type="button"
            onClick={() => onCardLike(card)}
          ></button>
        </div>
      </li>
  );
}