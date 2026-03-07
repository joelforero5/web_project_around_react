import avatar from '../../../images/avatar.jpg'
import { useState } from 'react'
import NewCard from './components/popup/newCard/NewCard'
import EditProfile from './components/popup/editProfile/EditProfile.jsx'
import EditAvatar from './components/popup/editAvatar/EditAvatar.jsx'
import Popup from './components/popup/Popup.jsx'
import Card from './components/card/Card.jsx'
import ImagePopup from './components/popup/imagePopup/ImagePopup.jsx'
const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

console.log(cards);
function Main(){
    const[popup, setPopup] = useState(null)
    const newCardPopup={title:'Nuevo Lugar',children:<NewCard/>}
    const editProfilePopup={title:'Editar Perfil',children:<EditProfile/>}
    const editAvatarPopup={title:'Editar Avatar',children:<EditAvatar/>}
    
    function handleOpenPopup(popup){
        setPopup(popup);
    }
    function handleClosePopup(){
        setPopup(null);
    }
    return(
        <main className="content">
        <section className="profile page__section">
          <div className="profile__image-container" onClick={()=>handleOpenPopup(editAvatarPopup)} >
            <div className="profile__image-overlay">
              <i className="fas fa-pen"></i>
            </div>
            <img className="profile__image" 
            src={avatar} alt="Avatar" 
            />
          </div>
          
          <div className="profile__info">
            <h1 className="profile__title">Jaques Costeau</h1>
            <button
              aria-label="Editar perfil"
              className="profile__edit-button"
              type="button"
              onClick={()=>handleOpenPopup(editProfilePopup)}
            ></button>
            <p className="profile__description"></p>
          </div>
          <button
            aria-label="Agregar tarjeta"
            className="profile__add-button"
            type="button"
            onClick={() => handleOpenPopup(newCardPopup)}
          ></button>
        </section>
        <section className="cards page__section">
          <ul className="cards__list">
            {cards.map((card) => (
                <Card key={card._id} handleOpenPopup={handleOpenPopup} onClose={handleClosePopup} card={card}/>
            ))}
          </ul>
        </section>
        {popup && (<Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
        </Popup>
    )}
      </main>
    )
}
export default Main