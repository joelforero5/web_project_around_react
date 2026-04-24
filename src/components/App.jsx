import { useState, useEffect } from 'react'
import '../index.css'
import Header from './header/Header.jsx'
import Footer from './footer/Footer.jsx'
import Main from './main/Main.jsx'
import {api} from '../utils/api.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function App() {
    const [currentUser, setCurrentUser] = useState({
        name: '',
        about: '',
        avatar: ''
    });
    const [cards, setCards] = useState([]);
    const [popup, setPopup] = useState(null); // ← subido desde Main
   

    useEffect(() => {
        api.getUserInfo().then((userData) => {
            setCurrentUser(userData);
            console.log({
                msg:"Se cargo informacion del usuario",
                data:userData
            });
        }).catch(console.error);
         api.getInitialCards().then((data) => {
            setCards(data)
            console.log({
                msg:"Se cargaron las tarjetas",
                data:data
            });
          }).catch((err) => {
            console.log({
                msg:"Error al cargar las tarjetas",
                data:err
            });
          });
    }, []);

    
        async function handleCardLike(card) {
        // Verifica una vez más si a esta tarjeta ya les has dado like
        const isLiked = card.isLiked;
        
        // Envía una solicitud a la API y obtén los datos actualizados de la tarjeta
        await api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
        }).catch((error) => console.error(error));
        }
        async function handleCardDelete(card) {
          await api.deleteCard(card._id).then(() => {
            setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
            handleClosePopup();
          }).catch((error) => console.error(error));
        }

    // ← subido desde Main
    function handleOpenPopup(popup) {
        setPopup(popup);
    }

    // ← subido desde Main
    function handleClosePopup() {
        setPopup(null);
    }

    function handleUpdateUser(data){
        api.setUserInfo(data).then((newData) => {
            setCurrentUser(newData);
            handleClosePopup(); 
        }).catch(console.error);
    };
    function handleUpdateAvatar(data) {
    api.setUserAvatar(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
    }).catch(console.error);
  };
  function handleAddPlaceSubmit(data) {
    api.addNewCard(data).then((newCard)=>{
        setCards([newCard, ...cards]);
        handleClosePopup();
    })
  }

    return (
        <div className="page__content">
            <CurrentUserContext.Provider value={{ 
              currentUser, handleUpdateUser, 
               handleUpdateAvatar, 
              handleAddPlaceSubmit,handleCardDelete }}>
                <Header />
                <Main
                    onOpenPopup={handleOpenPopup}
                    onClosePopup={handleClosePopup}
                    popup={popup}
                    cards={cards}
                    onCardLike={handleCardLike}
                />
                <Footer />
            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;