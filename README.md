# Around The U.S. — React

**Around The U.S.** es una aplicación web interactiva tipo red social que permite a los usuarios explorar, crear y gestionar tarjetas de lugares dentro de los Estados Unidos.

Esta versión es una **migración completa a React** de la versión anterior, reemplazando la arquitectura orientada a objetos con POO vanilla por una arquitectura moderna basada en **componentes declarativos, hooks y Context API**.

---

## 🛠️ Tecnologías utilizadas

### Frontend
- React 18 (Vite)
- JavaScript ES6+
- HTML5 semántico
- CSS3 (Flexbox, Grid Layout, Media Queries)
- Context API
- React Hooks (`useState`, `useEffect`, `useContext`, `useRef`)

### Backend / Integraciones
- API REST (CRUD)
- Persistencia de usuarios y tarjetas
- Manejo de Promises y `async/await`

### Herramientas
- Git & GitHub
- Vite
- ESLint

---

## 📱 Diseño Responsivo

- Adaptado para resoluciones desde **320px hasta desktop**
- Layout flexible con Grid y Flexbox
- Imágenes responsivas
- Efectos visuales con `hover` y estados activos

---

## ✨ Funcionalidades

### 👤 Perfil de usuario
- Edición de nombre y descripción
- Actualización de avatar con URL
- Datos sincronizados con el servidor
- Re-render automático tras respuesta exitosa de la API

### 🖼️ Tarjetas de lugares
- Render dinámico desde la API
- Creación de nuevas tarjetas
- Eliminación con popup de confirmación
- Vista ampliada de imagen en popup

### ❤️ Sistema de likes
- Like / dislike persistente en backend
- Estado visual sincronizado con la base de datos

### 🪟 Popups reutilizables
- Popup de imagen
- Popup con formulario
- Popup de confirmación
- Cierre por botón, clic externo y tecla `Esc`

### ✅ Formularios
- Validación en tiempo real con API nativa del navegador (`validationMessage`, `checkValidity`)
- Mensajes de error por campo
- Bloqueo/desbloqueo dinámico del botón submit

---

## 🔄 Migración desde la versión anterior

| Versión anterior (Vanilla JS + POO) | Esta versión (React) |
|---|---|
| Clases: `Card`, `Section`, `Popup`, etc. | Componentes funcionales de React |
| Manipulación directa del DOM | Estado declarativo con `useState` |
| Event listeners manuales | Eventos sintéticos de React |
| `FormValidator` como clase | Validación nativa con hooks |
| `UserInfo` como clase | `CurrentUserContext` con Context API |
| Instancias de `Api` por módulo | Instancia singleton compartida |
| `Promise.all()` en `index.js` | `useEffect` en `App.jsx` |

---

## 🧠 Arquitectura

### Componentes
App
├── Header
├── Main
│   ├── Card
│   └── Popup
│       ├── EditProfile
│       ├── EditAvatar
│       ├── NewCard
│       ├── ConfirmDelete
│       └── ImagePopup
└── Footer
### Estado global — Context API
`CurrentUserContext` expone:
- `currentUser` — datos del usuario autenticado
- `handleUpdateUser` — actualiza nombre y descripción
- `onUpdateAvatar` — actualiza el avatar
- `handleAddPlaceSubmit` — crea una nueva tarjeta

### Separación de responsabilidades
- `App.jsx` — estado global, llamadas a la API, handlers principales
- `Main.jsx` — renderizado de perfil y tarjetas, recibe props de App
- Componentes de popup — solo formulario y lógica local de validación
- `api.js` — capa de comunicación con el servidor, exportada como singleton

---

## 📁 Estructura del proyecto

```bash
src/
├── components/
│   ├── header/
│   ├── footer/
│   └── main/
│       ├── Main.jsx
│       └── components/
│           ├── card/
│           └── popup/
│               ├── Popup.jsx
│               ├── editProfile/
│               ├── editAvatar/
│               ├── newCard/
│               ├── confirmDelete/
│               └── imagePopup/
├── contexts/
│   └── CurrentUserContext.js
├── utils/
│   └── api.js
├── images/
└── index.css
```

---

## 🚀 Deploy

Puedes ver el proyecto desplegado aquí: https://joelforero5.github.io/web_project_around_react/

---

## 🔗 Versión anterior

La versión sin React basada en POO está disponible aquí:  
[Around The U.S. — Vanilla JS](https://joelforero5.github.io/web_project_around_es/src)