import { useState, useContext, useRef } from 'react'; 
import {CurrentUserContext} from '../../../../../contexts/CurrentUserContext.js'; 

export default function EditProfile() {
  const userContext = useContext(CurrentUserContext); // Obtiene el objeto currentUser
  const { currentUser, handleUpdateUser } = userContext;

  const [name, setName] = useState(currentUser.name); // Agrega la variable de estado para name
  const [description, setDescription] = useState(currentUser.about); // Agrega la variable de estado para description
  const [isValid,setIsValid] = useState(false);
  const [errors,setErrors] = useState({name:'',description:''});
  const nameRef = useRef();
  const descriptionRef = useRef();

  const handleNameChange = (event) => {
    setName(event.target.value);
        setErrors((prev) => ({ ...prev, name: event.target.validationMessage }));
       setIsValid(event.target.form.checkValidity());
  };

  const handleDescriptionChange = (event) => {
     setDescription(event.target.value);
        setErrors((prev) => ({ ...prev, description: event.target.validationMessage }));
        setIsValid(event.target.form.checkValidity());
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del envío de formularios

    handleUpdateUser({ name, about: description }); // Actualiza la información del usuario
  };
 

    return(
    <form autoComplete="off" className="popup__form" id="edit-profile-form" onSubmit={handleSubmit}>
    <input
    ref={nameRef}
        className="popup__input popup__input_type_name"
        id="name"
        name="name"
        placeholder="Nombre"
        type="text"
        required
        minLength={2}
        maxLength={40}
        onChange={handleNameChange}
        value={name} // Agrega el valor del estado name al input
    />
    <span className={`popup__input-error ${errors.name && 'popup__input-error_visible'}`} id="name-error">{errors.name}</span>
    <input
    ref={descriptionRef}
        className="popup__input popup__input_type_description"
        id="description"
        name="description"
        placeholder="Acerca de mí"
        required
        minLength={2}
        maxLength={200}
        type="text"
        onChange={handleDescriptionChange}
        value={description} // Agrega el valor del estado description al input
    />
    <span className={`popup__input-error ${errors.description && 'popup__input-error_visible'}`} id="description-error">{errors.description}</span>
    <button className="button popup__button" type="submit" disabled={!isValid}>Guardar</button>
</form>
);
}