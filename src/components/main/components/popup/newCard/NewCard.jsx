import { useContext, useRef , useState  } from "react";
import { CurrentUserContext } from "../../../../../contexts/CurrentUserContext.js";
export default function NewCard(){
const {handleAddPlaceSubmit} = useContext(CurrentUserContext);
const namePLaceRef = useRef();
const linkPlaceRef = useRef();
const [isValid,setIsValid] = useState(false);
const [errors,setErrors] = useState({name:'',link:''});
function handleSubmit(event){
    event.preventDefault();
    handleAddPlaceSubmit({name:namePLaceRef.current.value, link:linkPlaceRef.current.value});
}
function handleInputChange(event){
    const {name, validationMessage} = event.target;
    setErrors((prev) => ({ ...prev, [name]: validationMessage }));
    setIsValid(event.target.form.checkValidity());
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
              onChange={handleInputChange}
            />
            <span className={`popup__input-error ${errors.name && 'popup__input-error_visible'}`} id="place-name-error">{errors.name}</span>
            <input
              ref={linkPlaceRef}
              className="popup__input popup__input_type_url"
              id="link"
              name="link"
              placeholder="Enlace a la imagen"
              required
              type="url"
              minLength="2"
              onChange={handleInputChange}

            />
            <span className={`popup__input-error ${errors.link && 'popup__input-error_visible'}`} id="link-error">{errors.link}</span>
            <button className="button popup__button" type="submit" disabled={!isValid}>Crear</button>
          </form>
);
}