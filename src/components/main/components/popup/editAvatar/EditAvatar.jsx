import { useRef, useContext } from 'react';
import { CurrentUserContext } from '../../../../../contexts/CurrentUserContext.js';

function EditAvatar(){
  const avatarRef = useRef();
  const {handleUpdateAvatar} = useContext(CurrentUserContext);

  function handleSubmit(event){
    event.preventDefault();
    handleUpdateAvatar({avatar:avatarRef.current.value});
  }
    return(
    <form autoComplete="off" className="popup__form" id="new-card-form" onSubmit={handleSubmit}>
            <input
            ref={avatarRef}
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
export default EditAvatar;