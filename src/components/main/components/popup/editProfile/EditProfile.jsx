export default function EditProfile(){
    return(
    <form autoComplete="off" className="popup__form" id="new-card-form">
            <input
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