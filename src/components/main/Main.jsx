import avatar from '../../../images/avatar.jpg'
import React, { useEffect, useState , useContext} from 'react'
import NewCard from './components/popup/newCard/NewCard'
import EditProfile from './components/popup/editProfile/EditProfile.jsx'
import EditAvatar from './components/popup/editAvatar/EditAvatar.jsx'
import Popup from './components/popup/Popup.jsx'
import Card from './components/card/Card.jsx'
import ImagePopup from './components/popup/imagePopup/ImagePopup.jsx'
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js'

function Main({onOpenPopup,onClosePopup,popup,cards,onCardLike,onCardDelete}) {
    
    const newCardPopup={title:'Nuevo Lugar',children:<NewCard/>}
    const editProfilePopup={title:'Editar Perfil',children:<EditProfile/>}
    const editAvatarPopup={title:'Editar Avatar',children:<EditAvatar/>}
    const {currentUser} = useContext(CurrentUserContext);
   

    return(
        <main className="content">
        <section className="profile page__section">
          <div className="profile__image-container" onClick={()=>onOpenPopup(editAvatarPopup)} >
            <div className="profile__image-overlay">
              <i className="fas fa-pen"></i>
            </div>
            <img className="profile__image" 
            src={`${currentUser.avatar}`} alt="Avatar" 
            />
          </div>
          
          <div className="profile__info">
            <h1 className="profile__title">{`${currentUser.name}`}</h1>
            <button
              aria-label="Editar perfil"
              className="profile__edit-button"
              type="button"
              onClick={()=>onOpenPopup(editProfilePopup)}
            ></button>
            <p className="profile__description">{`${currentUser.about}`}</p>
          </div>
          <button
            aria-label="Agregar tarjeta"
            className="profile__add-button"
            type="button"
            onClick={() => onOpenPopup(newCardPopup)}
          ></button>
        </section>
        <section className="cards page__section">
          <ul className="cards__list">
            {cards.map((card) => (
                <Card key={card._id} handleOpenPopup={onOpenPopup} 
                onClose={onClosePopup} onCardLike={onCardLike} onCardDelete={onCardDelete} card={card}/>
            ))}
          </ul>
        </section>
        {popup && (<Popup onClose={onClosePopup} title={popup.title}>
            {popup.children}
        </Popup>
    )}
      </main>
    )
}
export default Main