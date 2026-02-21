# Semaphore Flags Flashcards ⚓

Aplicación web de flashcards para memorizar el alfabeto de banderas de señales (Código Internacional de Semáforas). Diseñada con un enfoque corporativo, accesible y totalmente responsive, ideal para estudiantes de ciencias náuticas.

## 🌟 Características

- **Baraja aleatoria**: las banderas se muestran en orden aleatorio cada vez que se carga la página o se presiona "Alternar".
- **Tarjeta interactiva**: haz clic o presiona `Enter`/`Espacio` para voltear la tarjeta y ver la letra o palabra correspondiente.
- **Progreso visual**: contador numérico + barra de progreso dinámica.
- **Totalmente accesible**: navegación por teclado, atributos ARIA y contraste de colores optimizado.
- **Diseño corporativo**: encabezado con logo institucional, información de la Escuela Naval y paleta de colores azul marino y naranja.
- **Manejo de errores**: si falta alguna imagen, se muestra un texto de respaldo en el frente de la tarjeta.
- **Responsive**: se adapta a móviles, tablets y escritorio.

## 🚀 Cómo usar

1. **Clona o descarga** este repositorio.
2. **Asegúrate de que la carpeta `./flags`** contenga todas las imágenes de banderas con los nombres exactos listados arriba (en mayúscula, formato PNG).
3. **Coloca tu logo institucional** (opcional) como `logo_ENAP.png` en la raíz, o modifica la ruta en `index.html`.
4. **Abre `index.html`** en cualquier navegador moderno (Chrome, Firefox, Edge, Safari).
5. ¡Comienza a memorizar! Usa los botones "Anterior", "Siguiente" y "Alternar", o voltea la tarjeta haciendo clic sobre ella.

## 🛠️ Tecnologías utilizadas

- HTML5 semántico
- CSS3 personalizado + variables CSS
- Bootstrap 5 (solo para estructura base y utilidades)
- Bootstrap Icons
- JavaScript vanilla (sin frameworks)

## 📌 Personalización

- **Colores**: definidos como variables CSS en `:root` (fácil de cambiar).
- **Textos institucionales**: modifica directamente en `index.html` dentro del `<nav>`.
- **Ruta de imágenes**: por defecto apunta a `./flags/`. Si cambias la carpeta, actualiza la ruta en `script.js` (línea donde se asigna `flagImage.src`).

## ♿ Accesibilidad

- La tarjeta tiene `role="button"`, `tabindex="0"` y manejo de eventos de teclado (`Enter`/`Espacio`).
- Atributo `aria-expanded` para indicar el estado de volteo.
- Contraste de colores verificado (relación ≥4.5:1).
- Enlaces con efecto hover y subrayado para mejor identificación.

## 📝 Créditos

- **Desarrollado por**: Sergio Usma — Programa de Ciencias Náuticas, Escuela Naval de Cadetes Almirante Padilla.
- **Iconos**: [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Framework CSS**: [Bootstrap](https://getbootstrap.com/)

## 📄 Licencia

Este proyecto es de uso libre para fines educativos. Si lo utilizas, agradecemos mencionar la fuente.
