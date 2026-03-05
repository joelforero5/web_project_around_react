import avatar from '../../../images/avatar.jpg'
function Main(){
    return(
        <main class="content">
        <section class="profile page__section">
          <div class="profile__image-container">
            <div class="profile__image-overlay">
              <i class="fas fa-pen"></i>
            </div>
            <img class="profile__image" src={avatar} alt="Avatar" />
          </div>
          
          <div class="profile__info">
            <h1 class="profile__title"></h1>
            <button
              aria-label="Editar perfil"
              class="profile__edit-button"
              type="button"
            ></button>
            <p class="profile__description"></p>
          </div>
          <button
            aria-label="Agregar tarjeta"
            class="profile__add-button"
            type="button"
          ></button>
        </section>
        <section class="cards page__section">
          <ul class="cards__list">
            
          </ul>
        </section>
      </main>
    )
}
export default Main