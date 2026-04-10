import { useContext, useRef } from "react";
import { CurrentUserContext } from "../../../../../contexts/CurrentUserContext.js";
export default function NewCard(){
const {handleAddPlaceSubmit} = useContext(CurrentUserContext);
const namePLaceRef = useRef();
const linkPlaceRef = useRef();
function handleSubmit(event){
    event.preventDefault();
    handleAddPlaceSubmit({name:namePLaceRef.current.value, link:linkPlaceRef.current.value});
}
return(
    <form autoComplete="off" className="popup__form" id="new-card-form" onSubmit={handleSubmit}>
            <input
            ref={namePLaceRef}
              className="popup__input popup__input_type_card-name"
              name="name"
              id="place-name"
              placeholder="Título"
              required
              type="text"
              minLength="2"
              maxLength="30"
            />
            <span className="popup__input-error popup__input-error_visible" id="place-name-error"></span>
            <input
              ref={linkPlaceRef}
              className="popup__input popup__input_type_url"
              id="link"
              name="link"
              placeholder="Enlace a la imagen"
              required
              type="url"
              minLength="2"
            />
            <span className="popup__input-error" id="link-error"></span>
            <button className="button popup__button" type="submit">Crear</button>
          </form>
);
}