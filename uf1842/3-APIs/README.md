# Ejercicio: Random User API

En este ejercicio trabajarás con [una API](https://randomuser.me/) para obtener los datos de una persona aleatoria.

## La aplicación ya está montada

La estructura HTML, el diseño , el botón y la petición a la API ya están preparados. El archivo `app.js` también contiene la lógica necesaria para:

- Escuchar el clic del botón.
- Hacer una petición a `https://randomuser.me/api/`.
- Convertir la respuesta a JSON.
- Mostrar en la consola del navegador los datos recibidos.
- Pintar el nombre, los apellidos, el país y el teléfono.

No es necesario crear la aplicación desde cero ni añadir nuevas funciones.

## Tarea

Completa únicamente las **dos líneas de código** que faltan en `app.js`, indicadas por el comentario:

1. Una línea para actualizar la imagen de la persona usando el elemento con `id="photo"`.
2. Una línea para actualizar el email usando el elemento con `id="email"`.

Utiliza los datos disponibles en `data.results[0]` y sigue el patrón de las líneas que ya actualizan el resto de la información.

## Importante: revisar la consola

Abre las herramientas de desarrollo del navegador y consulta la pestaña **Console**. Al pulsar **Generar persona**, la aplicación muestra allí la respuesta completa de la API.

Observa la estructura del objeto `data` para localizar la URL de la imagen y la dirección de email que debes utilizar.

## Cómo probarlo

1. Abre `index.html` en el navegador.
2. Abre las herramientas de desarrollo con `F12` o `Ctrl + Shift + I`.
3. Entra en la pestaña **Console**.
4. Pulsa **Generar persona**.
5. Comprueba que se actualizan la foto y el email junto con los demás datos.

> Para que la petición funcione correctamente, necesitas conexión a Internet.
