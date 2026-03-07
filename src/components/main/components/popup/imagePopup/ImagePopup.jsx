export default function ImagePopup({card,onClose}){
    const {link,name}=card;
    return(
        <div className="popup" id="image-popup">
        <div className="popup__content popup__content_content_image">
          <button
            aria-label="Cerrar ventana emergente"
            className="popup__close"
            type="button"
            onClick={onClose}
          ></button>
          <img alt="" className="popup__image" src={link}/>
          <p className="popup__caption">{name}</p>
        </div>
      </div>
    )
}