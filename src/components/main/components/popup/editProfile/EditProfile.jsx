import { useState, useContext } from 'react'; 
import {CurrentUserContext} from '../../../../../contexts/CurrentUserContext.js'; 

export default function EditProfile() {
  const userContext = useContext(CurrentUserContext); // Obtiene el objeto currentUser
  const { currentUser, handleUpdateUser } = userContext;

  const [name, setName] = useState(currentUser.name); // Agrega la variable de estado para name
  const [description, setDescription] = useState(currentUser.about); // Agrega la variable de estado para description

  const handleNameChange = (event) => {
    setName(event.target.value); // Actualiza name cuando cambie la entrada
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); // Actualiza description cuando cambie la entrada
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del envío de formularios

    handleUpdateUser({ name, about: description }); // Actualiza la información del usuario
  };

    return(
    <form autoComplete="off" className="popup__form" id="edit-profile-form" onSubmit={handleSubmit}>
    <input
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
    <span className="popup__input-error" id="name-error"></span>
    <input
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
    <span className="popup__input-error" id="description-error"></span>
    <button className="button popup__button" type="submit" >Guardar</button>
</form>
);
}