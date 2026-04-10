import { useContext } from "react";
import { CurrentUserContext } from "../../../../../contexts/CurrentUserContext.js";

function DeleteCard({card}){
  const {handleCardDelete} = useContext(CurrentUserContext);
    function handleSubmit(event){
        event.preventDefault();
        handleCardDelete(card);
    }
    return(
      <form autoComplete="off" className="popup__form" id="delete-form" onSubmit={handleSubmit}>
            <button className="button popup__button" type="submit">Eliminar</button>
          </form>
    
)
}
export default DeleteCard;