<em>Prueba técnica de React, Todo App.</em>

Muchas gracias por la oportunidad, a continuación estarán los pasos para la instalación y ejecución.

# TaskFlow

Aplicación web para gestionar tareas con prioridad, fecha límite, estado y organización por columnas.

---

##  Requisitos

- Node.js (versión 16 o superior)
- npm o yarn

---

##  Pasos de instalación

1. **Clonar el repositorio:**  
   `git clone https://github.com/danikidsz/to-do-react`

2. **Entrar al proyecto:**  
   `cd to-do-react`

3. **Instalar dependencias:**  
   `npm install`

4. **Iniciar servidor:**  
   `npm run dev`

5. **Abrir en el navegador:**  
   http://localhost:5173/

---

##  Resumen de funcionalidades

### Crear tareas con:
- Nombre  
- Descripción  
- Fecha límite (date picker)  
- Prioridad (baja, media, alta)  
- Estado (pendiente, en proceso, completada)  

### Gestión:
- Eliminar tareas

### Resumen dinámico:
- Total de tareas  
- Tareas completadas  
- Tareas pendientes  
- Porcentaje de progreso  

### Otros:
- Persistencia con LocalStorage

---

##  Posibles mejoras o actualizaciones

- Incluir diseño responsive y mobile first  
- Incluir filtro para ver tareas por estado, prioridad o fecha  
- Reorganizar la app para no mostrar todas las tareas a la vez y evitar agobiar al usuario  
- Confirmación de acciones (eliminar/agregar tareas)  
- Editar tareas existentes  

---

##  Estructura del proyecto
.
├── public/
│   └── index.html
│
├── src/
│   ├── assets/
│   │   ├── clock-history.svg
│   │   ├── stopwatch-fill.svg
│   │   ├── check-circle-fill.svg
│   │   ├── delete.png
│   │   └── (otros iconos/imágenes)
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   │
│   ├── Tag.jsx
│   ├── Tag.css
│   │
│   ├── TaskForm.jsx
│   ├── TaskForm.css
│   │
│   ├── TaskColumn.jsx
│   ├── TaskColumn.css
│   │
│   ├── TaskCard.jsx
│   └── TaskCard.css
│
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── .gitignore
└── README.md

---

##  Respuestas conceptuales

### **1. Diferencia entre props y state**
R// Los props son datos que un componente padre envía a un componente hijo, mientras que los estados son valores que provocan cambios en componentes.

---

### **2. Diferencias entre SSR, CSR y SSG**
R//  
- **SSR:** la página se renderiza en el servidor cada vez que el usuario hace peticiones.  
- **CSR:** todo se renderiza en el cliente.  
- **SSG:** páginas totalmente estáticas que no requieren cambios constantes.  

---

### **3. Importancia del diseño responsive y estrategias**
R// El diseño responsive es importante porque permite que la aplicación se vea bien y funcione correctamente sin importar el dispositivo, mejorando la experiencia del usuario.

**¿Qué estrategias implemento?**  
Suelo experimentar bastante e intentar encontrar nuevas formas para mejorar en este tema. En esta prueba no apliqué diseño responsive, pero suelo usar:
- Componentes flexibles para que los elementos se ajusten solos  
- Frameworks como Bootstrap con grillas responsive  
- Mobile first cuando es posible  

---

### **4. Beneficios de una buena estructura de componentes**
R// Permite reutilizar elementos sin repetir código y facilita la corrección de errores.

Yo lo organizo dividiéndolo en componentes pequeños según su función:  
- **TaskColumn:** agrupa tareas por estado  
- **TaskCard:** representa una tarjeta individual  
- **TaskForm:** formulario para agregar tareas  

---

### **5. Persistencia y sincronización frontend-backend**
No tengo experiencia en producción, pero implementaría una API REST conectada a una base de datos.  
Sincronizaría datos con peticiones HTTP y usaría LocalStorage como caché temporal.

---

### **6. Optimización si hubiera 1000 tareas**
Mostraría solo los títulos en una lista colapsada y cargaría los detalles solo al expandir cada tarea.  
También usaría paginación para no cargar todo de una vez.

---

### **7. Patrón de diseño**
Conozco el patrón **Model–View–Controller (MVC)**, que divide la aplicación en datos, interfaz y control.  
Ya lo he usado en videojuegos para separar lógica, visual y eventos.

En una app web:
- **Model:** backend  
- **View:** interfaz en React  
- **Controller:** acciones del usuario / peticiones  

---
