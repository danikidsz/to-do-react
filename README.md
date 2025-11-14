<em>Prueba técnica de React, Todo App.</em>

Muchas gracias por la oportunidad, a continuación estarán los pasos para la instalación y ejecución.

TaskFlow

Aplicación web para gestionar tareas con prioridad, fecha límite, estado y organización por columnas.

Requisitos

Node.js (versión 16 o superior)

npm o yarn

Pasos:

1. Clonar el repositorio  git clone: https://github.com/danikidsz/to-do-react
2. Entrar al proyecto: cd to-do-react
3. Instalar dependencias: npm install
4. Iniciar servidor: npm run dev
5. Abrir en el navegador: http://localhost:5173/

Resumen de funcionalidades

Crear tareas con:

Nombre

Descripción

Fecha límite (date picker)

Prioridad (baja, media, alta)

Estado (pendiente, en proceso, completada)

Eliminar tareas

Resumen dinámico:

Total de tareas

Tareas completadas

Tareas pendientes

Porcentaje de progreso

Persistencia y guardado con LocalStorage

Posibles mejoras o actualizaciones

Incluir diseño responsive y mobile first

Incluir filtro para ver tareas por estado, prioridad o fecha.

Re organizar la app para no mostrar todas las tareas al tiempo y evitar agobiar al usuario.

Confirmación de acciones como eliminar o agregar tareas.

Editar tareas existentes.

Estructura del proyecto 
/src
  ├── App.jsx
  ├── TaskForm.jsx
  ├── TaskColumn.jsx
  ├── TaskCard.jsx
  ├── assets/
  ├── styles/
public/
index.html
package.json
README.md

Respuestas conceptuales

1. Explica con tus palabras cuál es la diferencia entre props y state en el framework
frontend que uses.
R// Los props son datos que un componente padre envía a un componente hijo mientras que los estados son valores que provocan cambios en componentes.

2. Explica brevemente qué diferencias hay entre SSR (Server Side Rendering), CSR
(Client Side Rendering) y SSG (Static Site Generation).

R// SSR la página se renderiza en el servidor cuando usuarios hacen peticiones mientras que el CSR renderiza todo en el cliente y por otro lado el SSG es basicamente cuando las páginas son estáticas y no requieren cambios constantes.

3. ¿Por qué es importante el diseño responsive y qué estrategias sueles usar para
implementarlo?
R// El diseño responsive es importante porque permite que la aplicación se vea bien y funcione correctamente sin importar el dispositivo y ayuda a mejorar la experiencia de usuario. 

¿Qué estrategias implemento?
Suelo experimentar bastante e intento de encontrar nuevas formas para mejorar en este tema, en esta ocasión no fue posible aplicar un diseño responsibe en la prueba sin embargo suelo utilizar componentes flexibles, para que los elementos se acomoden solos, también  realizo uso de frameworks como Bootstrap, que ya traen un sistema de grillas adaptables y vienen responsive por defecto.

4. ¿Qué beneficios trae tener una buena estructura de componentes y cómo la organizas
tú normalmente?
 R// Permite reutilizar durante toda la aplicación evitando repetir código y también ayuda mucho a corregir errores. Para organizarlo suelo dividirlo en componentes o secciones pequeñas que tenga la aplicación, por ejemplo en este caso utilicé TaskColumn que es el espacio donde se alojaron las tareas, TaskCard que representa cada bloque de tarea con su nombre, descripción y demás atributos. Por otro lado también está el TaskForm que es el que permite agregar las tareas.

 5. ¿Cómo manejarías la persistencia y sincronización de datos entre el frontend y el
backend en una app con usuarios reales?

No tengo experiencia en producción, pero implementaría una API REST conectada a una base de datos. Sincronizaría datos con peticiones HTTP en cada acción del usuario y usaría localStorage como caché temporal. 

6. Si tuvieras que optimizar esta app con 1000 tareas, ¿qué harías para evitar
re-renderizados innecesarios?

Mostraría solo los títulos de las tareas en una lista colapsada, y cargaría los detalles completos solo cuando el usuario seleccione o expanda una tarea. Esto reduce el renderizado inicial y mejora el rendimiento. Complementaría con paginación para no cargar las 1000 tareas de una vez.

7. ¿Podrías mencionar algún patrón de diseño que conozcas y explicar brevemente cómo
lo aplicarías en una aplicación web?

He visto un poco el (Model–View–Controller) que divide la aplicación en datos, interfaz y control, lo que ayuda a organizar mejor el código. Ya he usado estrategias similares al desarrollar videojuegos, separando la lógica del juego, la visualización y el manejo de eventos. En una app web lo aplicaría igual: el backend como Model, la interfaz en React como View y las peticiones o acciones del usuario como Controller.

